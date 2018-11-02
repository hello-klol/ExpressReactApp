
const buildRouter = (router, controller) => {
  router.get('/campaigns', controller.allCampaigns)
  router.get('/campaigns/:id', controller.campaignDetails)
  return router
}

module.exports.create = buildRouter
