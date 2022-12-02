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
    matchedCardIndices: [],
    data: [],
    displayModal: false,
    currentCard: undefined
  }

  // Arrow fx for binding
  handleCardClick = index => {
    const { currentPair, cards } = this.state

    if (currentPair.length === 2) {
      return
    }

    if (currentPair.length === 0) {
      this.setState({ currentPair: [index] })
      return
    }

    this.handleNewPairClosedBy(index);
    this.setState({currentCard: cards[index]});
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
    const { cards, currentPair, matchedCardIndices } = this.state

    const newPair = [currentPair[0], index]
    const matched = cards[newPair[0]] === cards[newPair[1]]
    this.setState({ currentPair: newPair })
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
        .then(data => data.results.bindings.forEach(el => fetchedData.push([
          el.infection_sexuellement_transmissible.value,
          el.infection_sexuellement_transmissibleLabel.value]
        )))
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
    const { cards, displayModal, currentCard } = this.state
    return (
      <div className="memory">
        <h1 className="text-center">Trouve les paires de cartes identiques et obtiens des informations sur celles-ci</h1>
        {cards.map((card, index) => (
            <Card
                card={card[1]}
                feedback={this.getFeedbackForCard(index)}
                index={index}
                key={index}
                onClick={this.handleCardClick}
            />
        ))}
        {displayModal && <MemoryGameModal card={currentCard} handleClose={this.handleCloseDetailClick}/>}
        <h2>A propos</h2>
        <p>Les données relatives aux infections sexuellement transmissibles présentes dans ce jeu proviennent de données Wikidata collectées le 1er décembre 2022 à l'aide de la requête SPARQL <a href="https://w.wiki/64E5" target="_blank">https://w.wiki/64E5</a>. En trouvant une paire de cartes identiques, vous pourrez accéder aux informations à son sujet sur Wikimedia Commons.</p>
      </div>
    )
  }
}

export default App
