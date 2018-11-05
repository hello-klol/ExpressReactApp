const campaignModel = require('./campaign')
const platformModel = require('./platform')
const targetAudienceModel = require('./target_audience')
const creativesModel = require('./creatives')
const insightsModel = require('./insights')

module.exports.create = connection => {
  return {
    Campaign: campaignModel(connection),
    Platform: platformModel(connection),
    TargetAudience: targetAudienceModel(connection),
    Creatives: creativesModel(connection),
    Insights: insightsModel(connection)
  }
}
