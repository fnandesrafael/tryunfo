import React, { useState, useEffect } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import Deck from './components/Deck';
import Header from './components/Header';
import DeckFilters from './components/DeckFilters';
import './styles/index.css';

export default function App() {
  const [cardData, setCardData] = useState({
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardTrunfo: false,
    cardRare: 'normal',
    deckCards: [],
    filteredDeck: [],
    hasTrunfo: false,
  });

  useEffect(() => {
    const recoveredDeck = localStorage.getItem('deck');

    if (recoveredDeck === null) {
      return;
    }
    setCardData({
      ...cardData,
      deckCards: JSON.parse(recoveredDeck),
      filteredDeck: JSON.parse(recoveredDeck),
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <section className="card-creation-section">
        <CardForm value={ { cardData, setCardData } } />
        <CardPreview value={ cardData } />
      </section>
      <section className="card-display-section">
        <DeckFilters value={ { cardData, setCardData } } />
        <Deck value={ { cardData, setCardData } } />
      </section>
    </div>
  );
}
