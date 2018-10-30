const mongoose = require('mongoose')

const Campaign = require('../models/campaign')
const Platform = require('../models/platform')
const TargetAudience = require('../models/target_audience')
const Insights = require('../models/insights')
const Creatives = require('../models/creatives')

describe('models', () => {
  /* Before testing create a sandbox database connection */
  before((done) => {
    mongoose.connect('mongodb://localhost/testDatabase')
    mongoose.connection.on('error', console.error.bind(console, 'connection error'))
    mongoose.connection.once('open', () => {
      console.log('Created and connected to test database')
      done()
    })
  })

  /* After tests are finished drop database and close connection */
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done)
    })
  })

  /* Clean collections after each test so they don't affect each other */
  afterEach((done) => {
    mongoose.connection.db.collections()
      .then((collections) => {
        for (let collection of collections) {
          collection.deleteMany()
        }
        done()
      })
  })
  describe('campaigns', () => {
    it('should handle valid save', (done) => {
      const camp = Campaign(mongoose.connection)({
        _id: 100,
        name: 'Lolcats',
        goal: 'Make millions',
        status: 'Scheduled'
      })
      camp.save(done)
    })

    it('should be invalid if missing required properties', (done) => {
      const camp = Campaign(mongoose.connection)({
        name: 'Lolcats',
        goal: 'Make millions',
        status: 'Scheduled'
      })
      camp.save(err => {
        if (err) { return done() }
        throw new Error('Should error without required property')
      })
    })
  })

  describe('platforms', () => {
    it('should handle valid save', (done) => {
      const plat = Platform(mongoose.connection)({
        type: 'facebook',
        status: 'Ended',
        total_budget: 1000000
      })
      plat.save(done)
    })

    it('should be invalid if missing required properties', (done) => {
      const camp = Campaign(mongoose.connection)({
        type: 'facebook',
        total_budget: 20
      })
      camp.save(err => {
        if (err) { return done() }
        throw new Error('Should error without required property')
      })
    })
  })

  describe('target audiences', (done) => {
    /* There are no required properties so no error will be thrown saving invalid data - it will be ignored */
    it('should not error when no relevant properties', (done) => {
      const targ = TargetAudience(mongoose.connection)({
        type: 'facebook',
        status: 'Ended',
        total_budget: 1000000,
        notAProperty: 'nonsense'
      })
      targ.save(done)
    })
  })

  describe('insights', (done) => {
    /* There are no required properties so no error will be thrown saving invalid data - it will be ignored */
    it('should not error when no relevant properties', (done) => {
      const ins = Insights(mongoose.connection)({
        type: 'facebook',
        status: 'Ended',
        total_budget: 1000000,
        notAProperty: 'nonsense'
      })
      ins.save(done)
    })
  })

  describe('creatives', (done) => {
    /* There are no required properties so no error will be thrown saving invalid data - it will be ignored */
    it('should not error when no relevant properties', (done) => {
      const ins = Creatives(mongoose.connection)({
        type: 'facebook',
        status: 'Ended',
        total_budget: 1000000,
        notAProperty: 'nonsense'
      })
      ins.save(done)
    })
  })
})
