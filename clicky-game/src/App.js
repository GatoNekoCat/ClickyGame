import React, { Component } from 'react';
import Nav from './components/Nav';
import Container from './components/Container';
import characters from './dbz.json';
import Title from './components/Title';
import Column from './components/Column';
import DBZCard from './components/DBZCard';
import Row from './components/Row';
// import Card from './components/Card';

import './App.css';


class App extends Component {
  state={
    characters,
    score: 0,
    highScore: 0,
    lastChoice: "",
    clicked: [],
  };

  //A clickEvent handler takes in an id and checks the index.
  // If
  clickEvent = id => {
    if(this.state.clicked.indexOf(id) === -1){
      this.takeTurn(); // add the id of the clicked character to the clicked array
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
  }
  render() {
    return (
      <div className="App">
      <Container>
        <header className="App-header">
          <Nav />
          <Title>
            Click Each Picture ONCE
          </Title>
          
        </header>
        <Row fluid={true}>
          {this.state.characters.map(character =>
           <DBZCard
           key={character.id}
           clickEvent={this.clickEvent}
           takeTurn={this.takeTurn}
           gameReset={this.gameReset}
           boardShuffle={this.boardShuffle}
           id={character.id}
           image={character.image}
           />
            )}
           
        </Row>


      </Container>
      </div>
    );
  }
}

export default App;
