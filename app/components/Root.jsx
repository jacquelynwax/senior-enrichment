import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store, { fetchCampuses, fetchStudents } from '../store'
import Campuses from './Campuses'
import Students from './Students'

// *** Thoughts and Notes for Me!
// What's happeneding here? When the Root component "has mounted," the store.dispatches below will dispatch the thunks I've defined in store which will asynchronously gather data from the backend and then update state (in store) so that the campuses and students data are now loaded and ready to go! I can now get this data onto props of other components.

export default class Root extends Component {
    componentDidMount () {
    const campusesThunk = fetchCampuses()
    store.dispatch(campusesThunk)

    const studentsThunk = fetchStudents()
    store.dispatch(studentsThunk)
  }

  render () {
    return (
      <Router>
        <div>
          <p>Check out <Link to="/campuses">Campuses</Link> or <Link to="/students">Students</Link>. Or go back <Link to="/">Home.</Link></p>
          <Switch>
              <Route path="/campuses" component={ Campuses } />
              <Route path="/students" component={ Students } />
          </Switch>
        </div>
      </Router>
    )
  }
}
