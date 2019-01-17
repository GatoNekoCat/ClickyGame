import React, { Component } from 'react';
import Nav from './components/Nav';
import Container from './components/Container';
import characters from './dbz.json';

import './App.css';


class App extends Component {
  state={
    characters,
    score: 0,
    topScore: 0,
    lastResponse: "",
    clicked: [],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          
        </header>
      </div>
    );
  }
}

export default App;
