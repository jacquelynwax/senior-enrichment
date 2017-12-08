import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGPA, postStudent } from '../store'


// Use this history prop


// *** Questions
// 1. Do I want my react-form to let a user know when the data they are inputting is invalid via model specifications?


function AllStudents (props) {

  const { students, newStudentFirstName, newStudentLastName, newStudentEmail, newStudentGPA, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleGPAChange, handleSubmit } = props

  return (
    <div>
      <Router>
        <div>
          <h4>Students</h4>
          <p>Please choose a student below to <i>view additional details</i> or to <i>delete that student's record</i>.</p>
            <div>
              {
                students.map(student => {
                  return (
                    <div key={student.id}>
                      <Link to={`/students/${student.id}`}>{ student.firstName + ' ' + student.lastName }</Link>
                    </div>
                  )
                })
              }
            </div>
            <div className="add">
            <h5>Add a new student</h5>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="studentFirstName">Student first name</label>
                  <input type="text" className="form-control" name="studentFirstName" placeholder="Enter student first name" value={newStudentFirstName} onChange={handleFirstNameChange} />
                </div>
                <div className="col-md-3">
                  <label htmlFor="studentLastName">Student last name</label>
                  <input type="text" className="form-control" name="studentLastName" placeholder="Enter student last name" value={newStudentLastName} onChange={handleLastNameChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="studentEmail">Student email</label>
                  <input type="text" className="form-control" name="studentEmail" placeholder="Enter student email" value={newStudentEmail} onChange={handleEmailChange} />
                </div>
                <div className="col-md-3">
                  <label htmlFor="studentEmail">Student gpa</label>
                  <input type="text" className="form-control" name="studentGPA" placeholder="Enter student GPA" value={newStudentGPA} onChange={handleGPAChange} />
                </div>
              </div>
              <div id="button">
                <button type="submit" className="btn btn-primary">Add Student</button>
              </div>
            </form>
          </div>
        </div>
      </Router>
    </div>
  )
}

// giving this dumb component access to students on state via its ownProps
const mapStateToProps = function(state, ownProps) {
  return {
    students: state.students,
    newStudentFirstName: state.newStudentFirstName,
    newStudentLastName: state.newStudentLastName,
    newStudentEmail: state.newStudentEmail,
    newStudentGPA: state.newStudentGPA
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleFirstNameChange (event) {
      const action = writeStudentFirstName(event.target.value)
      dispatch(action)
    },
    handleLastNameChange (event) {
      const action = writeStudentLastName(event.target.value)
      dispatch(action)
    },
    handleEmailChange (event) {
      const action = writeStudentEmail(event.target.value)
      dispatch(action)
    },
    handleGPAChange (event) {
      const action = writeStudentGPA(event.target.value)
      dispatch(action)
    },
    // updating both the backend and state with a newly created campus onSubmit and clearing input fields
    handleSubmit (event) {
      event.preventDefault()
      const firstName = event.target.studentFirstName.value
      const lastName = event.target.studentLastName.value
      const email = event.target.studentEmail.value
      const gpa = event.target.studentGPA.value
      const action = postStudent({ firstName, lastName, email, gpa })
      dispatch(action)
      dispatch(writeStudentFirstName(''))
      dispatch(writeStudentLastName(''))
      dispatch(writeStudentEmail(''))
      dispatch(writeStudentGPA(''))
    }
  }
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default withRouter(AllStudentsContainer)
