import React, { useState } from 'react';
import '../styles/DeckFilters.css';
import PropTypes from 'prop-types';
import Pokeball from '../images/pokeball.png';
import Pikachu from '../images/pikachu.png';

export default function DeckFilters({ value }) {
  const { cardData, setCardData } = value;

  const [filterParams, setFilterParams] = useState({
    nameFilter: '',
    rareFilter: 'todas',
    trunfoFilter: false,
  });

  const filterDeck = () => {
    const { nameFilter, rareFilter, trunfoFilter } = filterParams;

    const newFilteredDeck = cardData.deckCards.filter((card) => (
      card.cardName.toLowerCase().includes(nameFilter.toLowerCase())
      && (card.cardRare === rareFilter || rareFilter === 'todas')
      && (card.cardTrunfo === trunfoFilter || !trunfoFilter)
    ));

    return setCardData({ ...cardData, filteredDeck: newFilteredDeck });
  };

  const handleChanger = ({ target }) => {
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;

    setFilterParams((prevState) => (
      { ...prevState, [target.name]: inputValue }
    ));
  };

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
        <input
          className="deck-filters-name"
          type="text"
          name="nameFilter"
          onChange={ handleChanger }
        />
        <h3 className="deck-filters-input-title">Filtre por raridade:</h3>
        <select
          className="deck-filters-rare"
          name="rareFilter"
          onChange={ handleChanger }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <div className="deck-filters-trunfo-container">
          <h3 className="deck-filters-input-title">Filtre por trunfo:</h3>
          <input
            className="deck-filters-trunfo"
            type="checkbox"
            name="trunfoFilter"
            onChange={ handleChanger }
          />
        </div>
        <button
          className="filter-btn"
          type="button"
          onClick={ filterDeck }
        >
          Filtrar
        </button>
      </div>
      <img className="deck-filters-pikachu" src={ Pikachu } alt="pikachu" />
    </div>
  );
}

DeckFilters.propTypes = {
  value: PropTypes.shape({
    cardData: PropTypes.shape({
      deckCards: PropTypes.arrayOf.isRequired,
    }).isRequired,
    setCardData: PropTypes.func.isRequired,
  }).isRequired,
};
