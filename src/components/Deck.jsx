import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function Deck({ value }) {
  const { filteredDeck } = value;

  return (
    <>
      {filteredDeck.map((card, index) => (
        <Card key={ index } value={ card } />
      ))}
    </>
  );
}

Deck.propTypes = {
  value: PropTypes.shape({
    filteredDeck: PropTypes.arrayOf.isRequired,
  }).isRequired,
};
