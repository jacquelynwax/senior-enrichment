import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AllStudentsContainer from './AllStudents'
import SingleStudentContainer from './SingleStudent'


export default function Students (props) {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/students" component={ AllStudentsContainer } />
          <Route path="/students/:studentId" component={ SingleStudentContainer } />
        </Switch>
      </Router>
    </div>
  )

}
