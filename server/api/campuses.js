'use strict'

const express = require('express')
const router = new express.Router()
const Campus = require('../models/Campus')
const Student = require('../models/Student')

module.exports = router

// get all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

// get a campus by id
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId, { include: [{ model: Student }] })
    .then(campus => {
      if (!campus) res.sendStatus(404)
      else res.json(campus)
    })
    .catch(next)
})

// post a new campus
router.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(createdCampus => res.json(createdCampus))
    .catch(next)
})

// put updated campus info for one campus
router.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: { id: req.params.campusId },
    returning: true
  })
    .then(updatedCampus => res.json(updatedCampus[1][0]))
    .catch(next)
})

// delete a campus
// router.delete('/:campusId', (req, res, next) => {
//   return Campus.destroy({ where: { id: req.params.campusId } })
//     .then(() => res.json(req.params.campusId))
//     .catch(next)
// })

router.delete('/:campusId', (req, res, next) => {
  Student.findAll({ where: {campusId: req.params.campusId } })
    .then(students => {
      Campus.destroy({ where: { id: req.params.campusId } })
      return students
    })
    .then((students) => {
      students.forEach(student => student.destroy())
    })
    .then(() => res.json(req.params.campusId))
    .catch(next)
})










//
