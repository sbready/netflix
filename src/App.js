import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/home'
import MovieDetail from './components/movieDetails/movieDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/:movieID" component={MovieDetail} />

          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
