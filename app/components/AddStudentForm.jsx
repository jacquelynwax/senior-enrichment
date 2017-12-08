import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, writeStudentGPA, postStudent } from '../store'


function AddStudentForm (props) {

  const { newStudentFirstName, newStudentLastName, newStudentEmail, newStudentGPA, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleGPAChange, handleSubmit } = props

  return (
    <div>
      <Router>
        <div>
          <div>
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
      const campusId = ownProps.campusId // this will be passed in when other components render this component
      console.log('!!!!!!ownProps in AddStudentForm render', campusId)
      const action = postStudent({ firstName, lastName, email, gpa, campusId })
      dispatch(action)
      dispatch(writeStudentFirstName(''))
      dispatch(writeStudentLastName(''))
      dispatch(writeStudentEmail(''))
      dispatch(writeStudentGPA(''))
    }
  }
}

const AddStudentFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudentForm)

export default AddStudentFormContainer
