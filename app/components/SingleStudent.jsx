import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { fetchStudent, fetchCampus, updateStudentFirstName, updateStudentLastName, updateStudentEmail, updateStudentGPA, updateStudent, destroyStudent } from '../store'

// *** Need to be able to add student's campus
// *** Would be nice to be able to sort the list by alphabetical last name
// *** Improve edit so that you can edit each field

class SingleStudent extends Component {

  componentDidMount () {
    const studentThunk = fetchStudent(this.props.match.params.studentId)
    store.dispatch(studentThunk)
  }

  render () {

    const { student, updatedFirstName, updatedLastName, updatedEmail, updatedGPA, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleGPAChange, handleSubmit, onClick } = this.props

    return (
      <div>
        <div>
          <h4>View Student Details: {student.firstName + ' ' + student.lastName}</h4>
          <div>Last Name: { student.lastName }</div>
          <div>First Name: { student.firstName }</div>
          <div>Email: { student.email }</div>
          <div>GPA: { student.gpa }</div>
        </div>
        <div className="add">
        <h5>Edit this student's record</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="studentFirstName">Student first name</label>
                <input type="text" className="form-control" name="studentFirstName" placeholder="Update student's first name" value={updatedFirstName} onChange={handleFirstNameChange} />
              </div>
              <div className="col-md-3">
                <label htmlFor="studentLastName">Student last name</label>
                <input type="text" className="form-control" name="studentLastName" placeholder="Update student's last name" value={updatedLastName} onChange={handleLastNameChange} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <label htmlFor="studentEmail">Student email</label>
                <input type="text" className="form-control" name="studentEmail" placeholder="Update student's email" value={updatedEmail} onChange={handleEmailChange} />
              </div>
              <div className="col-md-3">
                <label htmlFor="studentGPA">Student GPA</label>
                <input type="text" className="form-control" name="studentGPA" placeholder="Update student's gpa" value={updatedGPA} onChange={handleGPAChange} />
              </div>
            </div>
            <div id="button">
              <button type="submit" className="btn btn-primary">Submit Updates</button>
            </div>
          </form>
        </div>
        <h5 className="add">Delete this student</h5>
          <div id="button">
            <input type="button" value="Delete Student" className="btn btn-primary" onClick={(event) => onClick(student, student.id)} />
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    student: state.student,
    updatedFirstName: state.updatedStudentFirstName,
    updatedLastName: state.updatedStudentLastName,
    updatedEmail: state.updatedStudentEmail,
    updatedGPA: state.updatedStudentGPA
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleFirstNameChange (event) {
      const action = updateStudentFirstName(event.target.value)
      dispatch(action)
    },
    handleLastNameChange (event) {
      const action = updateStudentLastName(event.target.value)
      dispatch(action)
    },
    handleEmailChange (event) {
      const action = updateStudentEmail(event.target.value)
      dispatch(action)
    },
    handleGPAChange (event) {
      const action = updateStudentGPA(event.target.value)
      dispatch(action)
    },
    handleSubmit (event) {
      event.preventDefault()
      const firstName = event.target.studentFirstName.value
      const lastName = event.target.studentLastName.value
      const email = event.target.studentEmail.value
      const gpa = event.target.studentGPA.value
      const studentId = ownProps.match.params.studentId
      const action = updateStudent({ firstName, lastName, email, gpa }, studentId)
      dispatch(action)
      dispatch(updateStudentFirstName(''))
      dispatch(updateStudentLastName(''))
      dispatch(updateStudentEmail(''))
      dispatch(updateStudentGPA(''))
    },
    onClick (student, studentId) {
      const action = destroyStudent(student, studentId)
      dispatch(action)
    }
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer
