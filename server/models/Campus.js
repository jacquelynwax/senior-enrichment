const Sequelize = require('Sequelize')
const db = require('../db')

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT
})

module.exports = Campus
