#! /usr/bin/env node

    // export MONGO_URL="mongodb://admin:l0lc4t5@localhost:27017/campaigns"
// to clear and start over
// use campaigns;
// db.dropDatabase();


const models = require('./models');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const data = require('./data.json');


const mongoDbURL = process.env.MONGO_URL;
console.log('Lets begin');

// for case where KeyWords / interests have different names but same meaning
function cleanTargetAudience(aud) {
    return  Object.assign(aud, {
        'tags': aud.interests || aud.KeyWords || ''
    })
}

// for case where data is called header_1, header_2
function cleanCreatives(cre) {
    return Object.assign(cre, {
        'header': cre.header || cre.header_1 || '',
        'subheader': cre.header_2 || ''
    });
}

mongoose.createConnection(mongoDbURL)
    .then((connection) => {
        const { Campaign, Platform, TargetAudience, Creatives, Insights } = models.create(connection);

        return Promise.all(data.map((campaign) => {

            console.log('Get platforms')
            return Promise.all(Object.keys(campaign.platforms).map((platformKey) => {

                const platform = campaign.platforms[platformKey];
                const targetAudience = new TargetAudience(cleanTargetAudience(platform.target_audiance));
                const creatives = new Creatives(cleanCreatives(platform.creatives));
                const insights = new Insights(platform.insights);

                console.log('Saving target_audience, creatives, insights')
                // platform relies on these others to be persisted first
                return Promise.all([targetAudience.save(), creatives.save(), insights.save()])

                    .then(([targetAudience, creatives, insights])=>{
                        console.log('Saving platform')
                        return new Platform(Object.assign(platform, {
                            targetAudience, creatives, insights
                        })).save();

                    });

            })).then((platforms) => {
                console.log('Platform saved')
                console.log('Save campaign')
                return new Campaign(Object.assign(campaign, {
                    platforms
                })).save();
            });

        })).then(() => {
            console.log('Upload complete!');
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            connection.close();
        });

})