'use strict'

const express = require('express')
const router = new express.Router()
const Student = require('../models/Student')

module.exports = router

// get all students
router.get('/', (req, res, next) => {
  return Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

// get a student by id
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => {
      if (!student) res.sendStatus(404)
      else res.json(student)
    })
    .catch(next)
})

// get students by campusId
router.get('/campus/:campusId', (req, res, next) => {
  Student.findAll({ where: { campusId: req.params.campusId } })
  .then(students => {
    if (!students) res.sendStatus(404)
    else res.json(students)
  })
  .catch(next)
})

// post a new student
router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => res.json(createdStudent))
    .catch(next)
})

// put updated student info for one student
router.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where: { id: req.params.studentId },
    returning: true
  })
    .then(updatedStudent => res.json(updatedStudent[1][0]))
    .catch(next)
})

// delete a student
router.delete('/:studentId', (req, res, next) => {
  Student.destroy({ where: { id: req.params.studentId } })
    .then(deletedStudent => {
      if (!deletedStudent) res.sendStatus(404)
      else res.json({
        message: 'You successfully deleted this student.',
      })
    })
    .catch(next)
})















///
