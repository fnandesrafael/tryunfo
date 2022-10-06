import React from 'react';
import '../styles/DeckFilters.css';
import Pokeball from '../images/pokeball.png';
import Pikachu from '../images/pikachu.png';

export default function DeckFilters() {
  return (
    <div className="deck-filters-body">
      <img className="deck-filters-pokeball-1" src={ Pokeball } alt="pokeball" />
      <img className="deck-filters-pokeball-2" src={ Pokeball } alt="pokeball" />
      <div className="deck-filters-description">
        <h1 className="deck-filters-title">Seu Baralho</h1>
        <p className="deck-filters-text">
          Confira abaixo todas as suas cartas criadas.
          Utilize os filtros à direita para encontrá-las mais rapidamente!
        </p>
      </div>
      <div className="deck-filters-inputs">
        <h3 className="deck-filters-input-title">Filtre por nome:</h3>
        <input className="deck-filters-name" type="text" />
        <h3 className="deck-filters-input-title">Filtre por raridade:</h3>
        <select className="deck-filters-rare">
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div className="deck-filters-trunfo-container">
          <h3 className="deck-filters-input-title">Filtre por trunfo:</h3>
          <input className="deck-filters-trunfo" type="checkbox" />
        </div>
      </div>
      <img className="deck-filters-pikachu" src={ Pikachu } alt="pikachu" />
    </div>
  );
}
