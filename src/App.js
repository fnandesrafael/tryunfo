import React from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import Deck from './components/Deck';
import DeckFilters from './components/DeckFilters';
import HomeSection from './components/HomeSection';

export default function App() {
  return (
    <>
      <HomeSection />
      <div>Barrinha da Pokébola</div>
      <div>
        <CardForm />
        <CardPreview />
        <DeckFilters />
        <Deck />
      </div>
    </>
  );
}
