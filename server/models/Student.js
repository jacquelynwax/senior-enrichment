const Sequelize = require('Sequelize')
const db = require('../db')

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      isBetweenZeroAndFour(value) {
        if (value < 0.0 || value > 4.0) {
        throw new Error('This GPA is invalid. A valid GPA is between 0.0 and 4.0.')
        }
      }
    }
  }
})

module.exports = Student

















//
