import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import BattlePage from './components/BattlePage';
import { BrowserRouter , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/battle" component={ BattlePage } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
