#! /usr/bin/env node

// export MONGO_URL="mongodb://admin:l0lc4t5@localhost:27017/campaigns"

// to clear and start over"
// use campaigns;
// db.dropDatabase();

const models = require('./models')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const data = require('./data.json')

const mongoDbURL = process.env.MONGO_URL // split into userame password host

// for case where KeyWords / interests have different names but same meaning
function cleanTargetAudience (aud) {
  return Object.assign(aud, {
    'tags': aud.interests || aud.KeyWords || ''
  })
}

// for case where data is called header_1, header_2
function cleanCreatives (cre) {
  return Object.assign(cre, {
    'header': cre.header || cre.header_1 || '',
    'subheader': cre.header_2 || ''
  })
}

async function seedDatabase (conn) {
  const { Campaign, Platform, TargetAudience, Insights, Creatives } = models.create(conn)

  function saveTargetAudience (data) {
    const targetAudienceData = cleanTargetAudience(data)
    return new TargetAudience(targetAudienceData).save()
  }

  function saveCreatives (data) {
    const creativesData = cleanCreatives(data)
    return new Creatives(creativesData).save()
  }

  function saveInsights (data) {
    new Insights(data).save()
  }

  function savePlatforms (campaign) {
    return Object.keys(campaign.platforms).map(async (platformKey) => {
      const platformData = campaign.platforms[platformKey]

      const [targetAudience, creatives, insights] = await Promise.all([
        saveTargetAudience(platformData.target_audiance),
        saveCreatives(platformData.creatives),
        saveInsights(platformData.insights)
      ])

      return new Platform(Object.assign(platformData, {
        type: platformKey,
        target_audience: targetAudience,
        creatives,
        insights
      })).save()
    })
  }

  await Promise.all(
    data.map(async (campaign) => {
      const platforms = await Promise.all(savePlatforms(campaign))

      return new Campaign(Object.assign(campaign, {
        '_id': campaign.id,
        platforms
      })).save()
    })
  )
}

async function main (url) {
  let conn

  try {
    conn = await mongoose.createConnection(url)
    console.log('Connected')
  } catch (e) {
    console.log('Retry connection')
    return setTimeout(() => main(url), 1000)
  }

  try {
    await seedDatabase(conn)
  } catch (e) {
    console.log(e)
  } finally {
    conn.close()
  }
}

main(mongoDbURL)
