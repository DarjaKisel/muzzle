import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatList from './CatList';
import CatEdit from "./CatEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/cats' exact={true} component={CatList}/>
            <Route path='/cats/:catId' component={CatEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;