import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <MovieCard />
      </div>
    );
  }
}

export default App;
