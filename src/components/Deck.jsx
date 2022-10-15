import React, { useEffect } from 'react';
import Aos from 'aos';
import PropTypes from 'prop-types';
import Card from './Card';
import 'aos/dist/aos.css';

export default function Deck({ value }) {
  const { cardData, setCardData } = value;

  const deleteCard = ({ target }) => {
    const targetCard = target.parentElement;

    const newDeck = cardData.deckCards.filter((card) => {
      const cardIndex = cardData.deckCards.indexOf(card);

      if (cardIndex !== Number(targetCard.id)) {
        return card;
      } return false;
    });

    const stillHasTrunfo = cardData.deckCards.find((card) => card.cardTrunfo === true);

    localStorage.setItem('deck', JSON.stringify(newDeck));

    if (stillHasTrunfo) {
      setCardData({ ...cardData, deckCards: newDeck, filteredDeck: newDeck });
    } setCardData({
      ...cardData,
      hasTrunfo: false,
      deckCards: newDeck,
      filteredDeck: newDeck,
    });
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      {cardData.filteredDeck.map((card, index) => (
        <div className="card-container" id={ index } key={ index } data-aos="fade-up">
          <Card value={ card } />
          <button
            className="delete-btn"
            type="button"
            onClick={ deleteCard }
            data-testid="delete-button"
          >
            Excluir
          </button>
        </div>
      ))}
    </>
  );
}

Deck.propTypes = {
  value: PropTypes.shape({
    cardData: PropTypes.shape({
      deckCards: PropTypes.arrayOf.isRequired,
      filteredDeck: PropTypes.arrayOf.isRequired,
    }).isRequired,
    setCardData: PropTypes.func.isRequired,
  }).isRequired,
};
