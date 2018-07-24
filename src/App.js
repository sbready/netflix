import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header'
import MainCarousel from './components/main-carousel/main-carousel'
import MovieList from './components/movieList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainCarousel/>
        <MovieList/>
      </div>
    );
  }
}

export default App;
