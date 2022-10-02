import React, { useState } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import Deck from './components/Deck';
// import DeckFilters from './components/DeckFilters';
import Header from './components/Header';
import './styles/App.css';

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
  });

  return (
    <div className="app">
      <Header />
      <section>
        <CardForm value={ { cardData, setCardData } } />
        <CardPreview value={ cardData } />
        {/* <DeckFilters /> */}
        <Deck />
      </section>
    </div>
  );
}
