import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class Card extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

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
        token,
      } = this.props;
    return (
      <div
        className="container card-body mx-5"
        id={ token }
        data-aos="fade-up"
      >
        <h4
          data-testid="name-card"
          className="fs-4 fw-bold text-center card-name"
        >
          { cardName }

        </h4>
        {cardTrunfo === true ? (
          <h3
            data-testid="trunfo-card"
            className="fs-6 fw-bold text-center card-trunfo"
          >
            Super Trunfo ⭐
          </h3>
        ) : (
          <h3 className="fs-6 fw-bold text-center card-trunfo">
            Carta Comum
          </h3>
        )}
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="image-fluid card-image"
        />
        <h4
          data-testid="rare-card"
          className="h5 text-center text-capitalize fw-bold card-rare"
        >
          {cardRare }
        </h4>
        <p
          data-testid="description-card"
          className="fs-6 text-break text-center p-2 card-description"
        >
          {cardDescription}
        </p>
        <div className="container d-flex justify-content-around">
          <label htmlFor="attr1">
            <h5
              name="attr1"
              data-testid="attr1-card"
              className="fs-4 fw-bold m-2 card-attr"
            >
              { cardAttr1 }
            </h5>
          </label>
          <label htmlFor="attr2">
            <h5
              name="attr2"
              data-testid="attr2-card"
              className="fs-4 fw-bold m-2 card-attr"
            >
              { cardAttr2 }
            </h5>
          </label>
          <label htmlFor="attr3">
            <h5
              name="attr3"
              data-testid="attr3-card"
              className="fs-4 fw-bold m-2 card-attr"
            >
              { cardAttr3 }
            </h5>
          </label>
        </div>
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
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};
