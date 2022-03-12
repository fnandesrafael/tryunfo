import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

export default class Card extends Component {
  render() {
    const
      {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = this.props;
    return (
      <div
        id="new-card"
        className="card-body"
      >
        <h2
          className="card-title"
        >
          Pré Visualização da Carta

        </h2>
        <h3
          data-testid="name-card"
          className="name-display"
        >
          { cardName }

        </h3>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="image-display"
        />
        <div className="attributes-group">
          <h5
            data-testid="attr1-card"
            className="attribute-display"
          >
            { cardAttr1 }

          </h5>
          <h5
            data-testid="attr2-card"
            className="attribute-display"
          >
            { cardAttr2 }

          </h5>
          <h5
            data-testid="attr3-card"
            className="attribute-display"
          >
            { cardAttr3 }

          </h5>
        </div>
        {cardTrunfo === true ? (
          <h3
            data-testid="trunfo-card"
            className="trunfo-display"
          >
            Super Trunfo ⭐

          </h3>
        ) : null}
        <h4 data-testid="rare-card">{ cardRare }</h4>
        <p data-testid="description-card">{ cardDescription }</p>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
