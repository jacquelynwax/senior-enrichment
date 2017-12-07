import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { writeCampusName, writeCampusDescription, postCampus } from '../store'


function AllCampuses (props) {

  const { campuses, newCampusName, newCampusDescription, handleNameChange, handleDescriptionChange, handleSubmit } = props

  return (
    <div>
      <Router>
        <div>
          <h3>Welcome to the Campuses page. Please choose a campus below to view additional details about that campus.</h3>
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
          <h3>Add a new campus</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="campusName"
                placeholder="Campus name..."
                value={newCampusName}
                onChange={handleNameChange}
              />
              <input
                type="text"
                name="campusDescription"
                placeholder="Campus description..."
                value={newCampusDescription}
                onChange={handleDescriptionChange}
              />
              <span>
              <button type="submit">Submit New Campus</button>
              </span>
            </div>
          </form>
        </div>
      </Router>
    </div>
  )
}

// giving this dumb component access to campuses on state via its ownProps
const mapStateToProps = function(state, ownProps) {
  return {
    campuses: state.campuses,
    newCampusName: state.newCampusName,
    newCampusDescription: state.newCampusDescription
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    // establishing controlled components
    handleNameChange (event) {
      const action = writeCampusName(event.target.value)
      dispatch(action)
    },
    handleDescriptionChange (event) {
      const action = writeCampusDescription(event.target.value)
      dispatch(action)
    },
    // updating both the backend and state with a newly created campus onSubmit and clearing input fields
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

// *** Functional Notes for Me
// 1. State has been stocked via componentDidMount and thunks when Main renders. Here I have access to that state on store through mapStateToProps.
// 2. On change, we are establishing controlled components that allow us to clear and validate information if we ultimately want to do that.
// 3. On submit, we create a new thunk by passing campus information received from the form as an object to the postCampus thunk. This updates our database on the back end and then calls the createCampus action creator, updating our local state, too. We also clear the form by dispatching two action creators with empty strings.
