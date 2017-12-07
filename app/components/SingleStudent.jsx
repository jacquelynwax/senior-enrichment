import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { fetchStudent, updateStudentFirstName, updateStudentLastName, updateStudentEmail, updateStudentGPA, updateStudent } from '../store'


class SingleStudent extends Component {

  componentDidMount () {
    const studentThunk = fetchStudent(this.props.match.params.studentId)
    store.dispatch(studentThunk)
  }

  render () {

    const { student, updatedFirstName, handleFirstNameChange } = this.props
    console.log(student, updatedFirstName)

    return (
      <div>
        <div>
          <h3>Welcome to the Single Student page.</h3>
          <h4>{student.firstName}</h4>
          <h4>{student.lastName}</h4>
          <h4>{student.email}</h4>
          <h4>{student.gpa}</h4>
        </div>
        <div>
          <h3>Update this student</h3>
          <form>
            <div>
              <input
                type="text"
                name="studentFirstName"
                placeholder="Update student's first name..."
                value={updatedFirstName}
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                name="studentLastName"
                placeholder="Update student's last name..."
              />
              <input
                type="text"
                name="studentEmail"
                placeholder="Update student's email..."
              />
              <input
                type="text"
                name="studentGPA"
                placeholder="Update student's gpa..."
              />
              <span>
              <button type="submit">Submit Updates</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    student: state.student,
    updatedFirstName: state.updatedStudentFirstName
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleFirstNameChange (event) {
      const action = updateStudentFirstName(event.target.value)
      dispatch(action)
    }
  }
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudent)

export default SingleStudentContainer

// *** Notes for Me
// On this page, a user needs to be able to:
// 2. edit details for that single student
// 3. delete that student
// 4. navigate to a single campus page that is associated with that student
