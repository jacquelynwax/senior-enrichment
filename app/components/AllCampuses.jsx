import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { writeCampusName, writeCampusDescription, postCampus } from '../store'


function AllCampuses (props) {

  const { campuses, newCampusName, newCampusDescription, handleNameChange, handleDescriptionChange, handleSubmit } = props

  return (
    <div>
      <h4>Campuses</h4>
      <p>Please choose a campus below to <i>view additional details</i> or to <i>delete</i> that campus.</p>
      <div>
        {
          campuses.map(campus => {
            return (
              <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </div>
            )
          })
        }
      </div>
      <div className="add">
        <h5>Add a new campus</h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="campusName">Campus name</label>
              <input type="text" className="form-control" name="campusName" placeholder="Enter campus name" value={newCampusName} onChange={handleNameChange} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="campusDescription">Campus description</label>
              <textarea className="form-control" rows="3" name="campusDescription" placeholder="Enter campus description" value={newCampusDescription} onChange={handleDescriptionChange} />
            </div>
          </div>
          <div id="button">
            <button type="submit" className="btn btn-primary">Add Campus</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = function(state, ownProps) {
  return {
    campuses: state.campuses,
    newCampusName: state.newCampusName,
    newCampusDescription: state.newCampusDescription
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    handleNameChange (event) {
      const action = writeCampusName(event.target.value)
      dispatch(action)
    },
    handleDescriptionChange (event) {
      const action = writeCampusDescription(event.target.value)
      dispatch(action)
    },
    handleSubmit (event) {
      event.preventDefault()
      const name = event.target.campusName.value
      const description = event.target.campusDescription.value
      const action = postCampus({ name, description })
      dispatch(action)
      dispatch(writeCampusName(''))
      dispatch(writeCampusDescription(''))
    }
  }
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses)

export default withRouter(AllCampusesContainer)
