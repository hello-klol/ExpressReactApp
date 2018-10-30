const async = require('async')

const createController = (models) => {
  const { Campaign } = models

  const allCampaigns = function (req, res, next) {
    Campaign.find({}, 'name goal totalBudget status')
      .exec(function (err, listCampaigns) {
        if (err) { return next(err) }
        res.send(listCampaigns)
      })
  }

  const campaignDetails = function (req, res, next) {
    async.parallel({
      campaign: function (callback) {
        Campaign.findById(req.params.id)
          .populate({
            path: 'platforms',
            populate: { path: 'target_audience insights creatives' }
          })
          .exec(callback)
      }
    }, function (err, results) {
      if (err) { return next(err) }
      if (results.campaign == null) { // No results
        const err = new Error('Campaign not found')
        err.status = 404
        return next(err)
      }
      res.send(results)
    })
  }

  return {
    allCampaigns, campaignDetails
  }
}

module.exports.create = createController
