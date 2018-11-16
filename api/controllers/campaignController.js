function createError (msg, statusCode) {
  const err = new Error(msg)
  err.status = statusCode
  return err
}

function allCampaigns (Campaign) {
  return async (req, res, next) => {
    const query = Campaign.find({}, 'name goal total_budget status')

    let listCampaigns
    try {
      listCampaigns = await query.exec()
    } catch (err) {
      next(err)
    }

    if (listCampaigns == null) {
      return next(createError('No campaigns found', 404))
    }

    res.json(listCampaigns)
  }
}

function campaignDetails (Campaign) {
  return async (req, res, next) => {
    const query = Campaign.findById(req.params.id)
      .populate({
        path: 'platforms',
        populate: { path: 'target_audience insights creatives' }
      })

    let campaign
    try {
      campaign = await query.exec()
    } catch (err) {
      next(err)
    }

    if (campaign == null) { // No results
      return next(createError('Campaign not found', 404))
    }
    res.send({ campaign })
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
