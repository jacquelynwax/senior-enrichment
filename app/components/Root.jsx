import React, { Component } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import store, { fetchCampuses, fetchStudents } from '../store'
import Campuses from './Campuses'
import Students from './Students'


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
        <div className="container-fluid">
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
