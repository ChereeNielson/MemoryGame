import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import logo from "./logo.svg";
// import "./App.css";

// import the cards from a json list with image links
import cards from "./cards.json";

// create constructor from the image cards and set the initial scores to 0
// topScore is the most care bear cards clicked without duplicating
// currentScore is the most clicked in the current round, and resets to 0 when an image card is clicked twice
class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      topScore: 0,
      currentScore: 0,
    };
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }

  // check if an image card has been clicked
  checkIfClicked(id) {
    // create a copy of the image cards and use a random method to sort the array
    let clickedCard = this.state.cards.filter(card => card.id === id)[0];
    let cardsCopy = this.state.cards.slice().sort(function(a, b){return 0.5 - Math.random()});
    // if an image card has not been clicked, set its clicked state to true
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      cardsCopy[cardsCopy.findIndex((card) => card.id === id)] = clickedCard;
    
      // set the state and increment the counter
      this.setState({
        cards: cardsCopy,
        currentScore: this.state.currentScore + 1,
        topScore: (this.state.currentScore + 1 > this.state.topScore ? this.state.currentScore + 1 : this.state.topScore),
      });
    }

    // if an image card has been clicked already, then set its click to false and reset the game
    else {
      
      let resetCardsCopy = cardsCopy.map((card) => {
        return {
          id: card.id,
          image: card.image,
          clicked: false,
        }
      });
      this.setState({
        cards: resetCardsCopy,
        currentScore: 0,
      });
    } 
  }

  // render the header, score, wrapper, and footer on the page using the current state values
  render() {
    return (
      <div className="container">
        <Header currentScore={this.state.currentScore} topScore={this.state.topScore}/>
        <Wrapper>  
          {this.state.cards.map(card => (
            <Card
              checkIfClicked={this.checkIfClicked}
              id={card.id}
              key={card.id}
              image={card.image}
              />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
