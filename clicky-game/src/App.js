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

// shuffleArray takes in an array and then generates
// a random number for each element in the array
// and switches the current index with the random index
function shuffleArray(array) {
  for (let i=array.length-1;i>0;i--){
    //generate a random index to switch with
    let j = Math.floor(Math.random() * (i + 1));
    // switch the index of the array using our random num
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0,
    lastChoice: "",
    clicked: [],
  };

  //clickEvent takes in the id of the clicked character,
  // and checks if it is not in the state.clicked array. If so, call the addScore method
  clickEvent = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.addScore(); // add the id of the clicked character to the clicked array
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
  };

  addScore = () => {
    const newScore = this.state.score++;
    this.setState({
      score: newScore,
      lastChoice: ""
    });
    //If the newscore is higher than the highscore state,
    // set highscore state to newscore
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore});
      //If the user reaches 12 they win
    } else if (newScore === 12) {
      this.setState({ lastChoice: "Winnar!!"});
    } //Shuffle the board after a win
    this.boardShuffle();
  };

  
  boardShuffle = () => {
    let shuffledArray = shuffleArray(characters);
    this.setState({ characters: shuffledArray });
  };

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
              <Column size='lg-6'>
                <DBZCard
                  key={character.id}
                  clickEvent={this.clickEvent}
                  takeTurn={this.takeTurn}
                  gameReset={this.gameReset}
                  boardShuffle={this.boardShuffle}
                  id={character.id}
                  image={character.image}
                />
              </Column>
            )}

          </Row>


        </Container>
      </div>
    );
  }
}

export default App;
