const async = require('async')

function allCampaigns (Campaign) {
  return (req, res, next) => {
    Campaign.find({}, 'name goal totalBudget status')
      .exec(function (err, listCampaigns) {
        if (err) { return next(err) }
        res.json(listCampaigns)
      })
  }
}

function campaignDetails (Campaign) {
  return (req, res, next) => {
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
}

const createController = (models) => {
  const allCampaignsFn = allCampaigns(models.Campaign)
  const campaignDetailsFn = campaignDetails(models.Campaign)

  return {
    allCampaigns: allCampaignsFn,
    campaignDetails: campaignDetailsFn
  }
}

module.exports.create = createController
