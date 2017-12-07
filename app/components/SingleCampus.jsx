import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import store, { fetchCampus, fetchStudentsAtCampus, updateCampusName, updateCampusDescription, updateCampus, destroyCampus } from '../store'


class SingleCampus extends Component {

  componentDidMount () {
    const campusThunk = fetchCampus(this.props.match.params.campusId)
    store.dispatch(campusThunk)

    const studentsAtCampusThunk = fetchStudentsAtCampus(this.props.match.params.campusId)
    store.dispatch(studentsAtCampusThunk)
  }

  render () {

    const { campus, students, updatedCampusName, updatedCampusDescription, handleNameChange, handleDescriptionChange, handleSubmit, onClick } = this.props

    return (
      <div>
        <h3>Welcome to the Single Campus page.</h3>
        <h4>{campus.name}</h4>
        <h4>{campus.description}</h4>
        <h3>Students</h3>
          <div>
            {
              students.map(student => {
                return (
                  <div key={student.id}>
                    <Link to={`/students/${student.id}`}>{student.firstName + ' ' + student.lastName}</Link>
                  </div>
                )
              })
            }
          </div>
        <h3>Update this campus</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="campusName"
                placeholder="Update campus name..."
                value={updatedCampusName}
                onChange={handleNameChange}
              />
              <input
                type="text"
                name="campusDescription"
                placeholder="Update campus description..."
                value={updatedCampusDescription}
                onChange={handleDescriptionChange}
              />
              <span>
              <button type="submit">Submit Updates</button>
              </span>
            </div>
          </form>
        <h3>Delete this campus</h3>
          <form>
            <input type="button" value="Delete Campus" onClick={(event) => onClick(campus, campus.id)} />
          </form>
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    campus: state.campus,
    students: state.studentsAtCampus,
    updatedCampusName: state.updatedCampusName,
    updatedCampusDescription: state.updatedCampusDescription
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    //establishing controlled components
    handleNameChange (event) {
      const action = updateCampusName(event.target.value)
      dispatch(action)
    },
    handleDescriptionChange (event) {
      const action = updateCampusDescription(event.target.value)
      dispatch(action)
    },
    // updating both the backend and state with the updated campus
    handleSubmit (event) {
      event.preventDefault()
      const name = event.target.campusName.value
      const description = event.target.campusDescription.value
      const campusId = ownProps.match.params.campusId
      const action = updateCampus({ name, description }, campusId)
      dispatch(action)
      dispatch(updateCampusName(''))
      dispatch(updateCampusDescription(''))
    },
    // deleting campus from both backend and state on button onClick
    onClick (campus, campusId) {
      const action = destroyCampus(campus, campusId)
      dispatch(action)
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default SingleCampusContainer
