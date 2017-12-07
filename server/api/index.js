'use strict'

const apiRouter = require('express').Router()
const db = require('../db')

apiRouter.use('/students', require('./students'))
apiRouter.use('/campuses', require('./campuses'))

apiRouter.use(function (req, res) {
  res.status(404).end()
})

module.exports = apiRouter
