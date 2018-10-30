const cookieParser = require('cookie-parser')
const logger = require('morgan')

const express = require('express')
const mongoose = require('mongoose')
const mongoDB = 'mongodb://admin:l0lc4t5@localhost:27017/campaigns'

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))
const models = require('./models').create(mongoose.connection)

const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const indexRouter = require('./routes/index')

const apiController = require('./controllers/campaignController').create(models)
const apiRouter = require('./routes/api').create(express.Router(), apiController)

app.use('/', indexRouter)
app.use('/api', apiRouter)

module.exports = app
