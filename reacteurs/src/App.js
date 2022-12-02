import React, { Component } from 'react'

import './App.css'

import Card from './Card'
import {wikidataService} from "./core/WikidataService";
import {MemoryGameModal} from "./MemoryGameModal";

const VISUAL_PAUSE_MSECS = 750

class App extends Component {
  state = {
    cards: [],
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
    data: [],
    displayModal: false,
  }

  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index)
  }

  getFeedbackForCard(index) {
    const { currentPair, matchedCardIndices } = this.state
    const indexMatched = matchedCardIndices.includes(index)

    if (currentPair.length < 2) {
      return indexMatched || index === currentPair[0] ? 'visible' : 'hidden'
    }

    if (currentPair.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }

    return indexMatched ? 'visible' : 'hidden'
  }

  handleNewPairClosedBy(index) {
    const { cards, currentPair, guesses, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const newGuesses = guesses + 1
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair, guesses: newGuesses })
    if (matched) {
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair], displayModal: true })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  handleCloseDetailClick = () => {
    this.setState({ displayModal: false });
  }


  componentDidMount() {
    let fetchedData = [];
    wikidataService.query()
        .then(data => data.results.bindings.forEach(el => fetchedData.push(el.infection_sexuellement_transmissibleLabel.value)))
        .then(() => this.setState({data: fetchedData}))
        .then(() => {
          let tab = [...this.state.data, ...this.state.data];
          for (let i = tab.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
          }
          this.setState({cards: tab});
        })
        .catch(err => console.error(err));
  }

  render() {
    const { cards, guesses, displayModal } = this.state
    // TODO : score à améliorer
    return (
      <div className="memory">
        <h1>Trouve les paires de cartes identiques et obtiens des informations sur celles-ci</h1>
        {/* <GuessCount guesses={guesses} /> */}
        {cards.map((card, index) => (
            <Card
              card={card}
              feedback={this.getFeedbackForCard(index)}
              index={index}
              key={index}
              onClick={this.handleCardClick}
            />
        ))}
        {displayModal && <MemoryGameModal handleClose={this.handleCloseDetailClick}/>}
      </div>
    )
  }
}

export default App
