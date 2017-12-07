import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AllCampusesContainer from './AllCampuses'
import SingleCampusContainer from './SingleCampus'


export default function Campuses (props) {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/campuses" component={ AllCampusesContainer } />
          <Route path="/campuses/:campusId" component={ SingleCampusContainer } />
        </Switch>
      </Router>
    </div>
  )

}
