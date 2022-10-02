import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CardPreview.css';
import capitalize from '../utils/capitalize';

export default function CardPreview({ value }) {
  const { cardName, cardImage, cardDescription,
    cardAttr1, cardAttr2, cardAttr3, cardTrunfo, cardRare } = value;

  return (
    <div className="card-preview">
      <div>
        {cardTrunfo ? (<p data-testid="trunfo-card">⭐</p>) : (null)}
        <h3 data-testid="name-card">{cardName}</h3>
      </div>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <div>
        <h5>VIT</h5>
        <h3 data-testid="attr1-card">{cardAttr1}</h3>
        <h5>VEL</h5>
        <h3 data-testid="attr2-card">{cardAttr2}</h3>
        <h5>FOR</h5>
        <h3 data-testid="attr3-card">{cardAttr3}</h3>
      </div>
      <h3 data-testid="rare-card">{capitalize(cardRare)}</h3>
      <p data-testid="description-card">{cardDescription}</p>
    </div>
  );
}

CardPreview.propTypes = {
  value: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
};
