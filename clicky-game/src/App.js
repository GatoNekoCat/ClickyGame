import React, { Component } from 'react';
import Nav from './components/Nav';
import Container from './components/Container';
import characters from './dbz.json';
import Title from './components/Title';

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
      <Container>
      <div className="App">
        <header className="App-header">
          <Nav />
          
        </header>
      </div>
      </Container>
    );
  }
}

export default App;
