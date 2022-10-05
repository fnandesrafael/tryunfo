import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Deck({ value }) {
  const { deckCards } = value;
  console.log(deckCards);

  return (
    <section>
      {deckCards.map((card, index) => (
        <Card key={ index } value={ card } />
      ))}
    </section>
  );
}

Deck.propTypes = {
  value: PropTypes.shape({
    deckCards: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
