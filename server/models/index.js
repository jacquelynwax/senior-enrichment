'use strict';

// Required the database
const db = require('../db')

// Require all models
const Campus = require('./Campus')
const Student = require('./Student')

// Associations
Student.belongsTo(Campus)
Campus.hasMany(Student)

// Export the database and all models
module.exports = { db, Campus, Student }

// *** Text that was originally on this page from GH is below

  // Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/_db.js`)
	// Exporting all models from here seems like a good idea!

// This is also probably a good place for you to set up your associations
