import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGPA, postStudent } from '../store'


// *** Questions
// 1. Do I want my react-form to let a user know when the data they are inputting is invalid via model specifications?

// *** Functionality Notes for Me
// 1. User should be able to create a student

function AllStudents (props) {

  const { students, newStudentFirstName, newStudentLastName, newStudentEmail, newStudentGPA, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleGPAChange, handleSubmit } = props

  return (
    <div>
      <Router>
        <div>
          <h3>Welcome to the Students page. Please choose a student below.</h3>
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
            <h3>Add a new student.</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="studentFirstName"
                  placeholder="Student first name..."
                  value={newStudentFirstName}
                  onChange={handleFirstNameChange}
                />
                <input
                  type="text"
                  name="studentLastName"
                  placeholder="Student last name..."
                  value={newStudentLastName}
                  onChange={handleLastNameChange}
                />
                <input
                  type="text"
                  name="studentEmail"
                  placeholder="Student email..."
                  value={newStudentEmail}
                  onChange={handleEmailChange}
                />
                <input
                  type="text"
                  name="studentGPA"
                  placeholder="Student GPA..."
                  value={newStudentGPA}
                  onChange={handleGPAChange}
                />
                <span>
                <button type="submit">Submit New Student</button>
                </span>
              </div>
            </form>
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
      // dispatch(writeStudentFirstName(''))
      // dispatch(writeStudentLastName(''))
      // dispatch(writeStudentEmail(''))
      // dispatch(writeStudentGPA(''))
    }
  }
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents)

export default withRouter(AllStudentsContainer)
