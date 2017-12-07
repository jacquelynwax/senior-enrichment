const Sequelize = require('Sequelize')
const db = require('../db')

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // imageUrl: {
  //   defaultValue: // Not sure yet what to put here?
  // },
  description: Sequelize.TEXT
})

module.exports = Campus
