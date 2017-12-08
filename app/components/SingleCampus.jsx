import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
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
        <h4>{campus.name}</h4>
        <p>{campus.description}</p>
        <h5>Students</h5>
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
          <div className="add">
          <h5>Make changes to this campus</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="campusName">Campus name</label>
              <input type="text" className="form-control" name="campusName" placeholder="Update campus name" value={updatedCampusName} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="campusName">Campus description</label>
              <textarea className="form-control" rows="3" name="campusDescription" placeholder="Update campus description" value={updatedCampusDescription} onChange={handleDescriptionChange} />
            </div>
            <div className="form-group">
              <div id="button">
                <button type="submit" className="btn btn-primary">Submit Updates</button>
              </div>
            </div>
          </form>
          <h5 className="add">Delete this campus</h5>
          <div id="button">
            <input type="button" value="Delete Campus" className="btn btn-primary" onClick={(event) => onClick(campus, campus.id, this.props)} />
          </div>
        </div>
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
    onClick (campus, campusId, props) {
      const action = destroyCampus(campus, campusId)
      dispatch(action)
    }
  }
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)

export default withRouter(SingleCampusContainer)
