import React, { Component } from 'react'

import './App.css'

import Card from './Card'
import {wikidataService} from "./core/WikidataService";

const VISUAL_PAUSE_MSECS = 750

class App extends Component {
  state = {
    cards: [],
    currentPair: [],
    guesses: 0,
    matchedCardIndices: [],
    data: [],
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
      this.setState({ matchedCardIndices: [...matchedCardIndices, ...newPair] })
    }
    setTimeout(() => this.setState({ currentPair: [] }), VISUAL_PAUSE_MSECS)
  }

  componentDidMount() {
    let fetchedData = [];
    wikidataService.query()
        .then(data => data.results.bindings.forEach(el => fetchedData.push(el.infection_sexuellement_transmissibleLabel.value)))
        .then(() => this.setState({data: fetchedData}))
        .then(() => {
          let tab = [...this.state.data, ...this.state.data];
          let i, j, tmp;
          for (i = tab.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = tab[i];
            tab[i] = tab[j];
            tab[j] = tmp;
          }
          this.setState({cards: tab});
        })
        .catch(err => console.error(err));
  }

  render() {
    const { cards, guesses } = this.state
    // TODO : score à améliorer
    return (
      <div className="memory">
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
      </div>
    )
  }
}

export default App
