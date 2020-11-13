import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import List from '../pages/List';



export default function RouterComponent() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/list' component={List}/>
        <Route path='/signup' component={Signup}/>
       
      </Switch>
    </Router>

  );
}
