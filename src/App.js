import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
