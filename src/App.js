import React from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import Deck from './components/Deck';
import DeckFilters from './components/DeckFilters';
import Header from './components/Header';
import './styles/App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <CardForm />
        <CardPreview />
        <DeckFilters />
        <Deck />
      </div>
    </div>
  );
}
