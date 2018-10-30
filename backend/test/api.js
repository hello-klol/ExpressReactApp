const assert = require('assert')
const sinon = require('sinon')
const apiRouter = require('../routes/api')

/* Expected fn calls for each api path */
const expectedMappings = (controller) => {
  return {
    '/campaigns': controller.allCampaigns,
    '/campaign/:id': controller.campaignDetails
  }
}

let fakeRouter = {}
let fakeController = {}

/* Test router builder which maps paths to controller functions */
describe('API router', () => {

  beforeEach(() => {
    /* We're only calling GET on this router in the current design */
    fakeRouter = {
      get: sinon.stub()
    }

    fakeController = {
      allCampaigns: sinon.stub(),
      campaignDetails: sinon.stub()
    }
  })

  it('API router has create method', () => {
    const actual = typeof apiRouter.create
    const expected = 'function'
    assert.equal(actual, expected)
  })

  it('Build router returns router', () => {
    const actual = apiRouter.create(fakeRouter, fakeController)
    const expected = fakeRouter
    assert.equal(actual, expected)
  })

  it('Check path /campaigns is set to correct controller fn', () => {
    const apiPath = '/campaigns'
    apiRouter.create(fakeRouter, fakeController)

    for (a of fakeRouter.get.args) {
      if (a[0] === apiPath) {
        assert.equal(a[1], expectedMappings(fakeController)[apiPath])
      }
    }
  })

  it('Check path /campaign/:id is set to correct controller fn', () => {
    const apiPath = '/campaign/:id'
    apiRouter.create(fakeRouter, fakeController)

    for (a of fakeRouter.get.args) {
      if (a[0] === apiPath) {
        assert.equal(a[1], expectedMappings(fakeController)[apiPath])
      }
    }
  })

})
