import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/CardPreview.css';
import capitalize from '../utils/capitalize';

export default function CardPreview({ value }) {
  const [isImage, setIsImage] = useState(false);

  const { cardName, cardImage, cardDescription,
    cardAttr1, cardAttr2, cardAttr3, cardTrunfo, cardRare } = value;

  useEffect(() => {
    const verifyCardImage = async () => {
      const response = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(cardImage);

      return response ? setIsImage(true) : setIsImage(false);
    };
    verifyCardImage();
  }, [cardImage]);

  return (
    <div className="card-preview-section">
      <h1 className="card-preview-title">Pré-visualize sua carta</h1>
      <div className="card-preview">
        <div className="card-preview-upper-container">
          <div className="card-preview-info-container">
            <h3 className="card-preview-name" data-testid="name-card">
              {cardName}
              {cardTrunfo ? (
                <p
                  className="card-preview-trunfo"
                  data-testid="trunfo-card"
                >
                  ⭐
                </p>
              ) : (null)}
            </h3>
            {isImage ? (
              <img
                className="card-preview-image"
                data-testid="image-card"
                src={ cardImage }
                alt={ cardName }
              />
            ) : (
              <div className="card-preview-image" />
            )}
          </div>
          <div className="card-preview-attr-container">
            <h3 className="card-preview-attr-name">VIT</h3>
            <h3
              className="card-preview-attr-value"
              data-testid="attr1-card"
            >
              {cardAttr1}
            </h3>
            <h3 className="card-preview-attr-name">VEL</h3>
            <h3
              className="card-preview-attr-value"
              data-testid="attr2-card"
            >
              {cardAttr2}
            </h3>
            <h3 className="card-preview-attr-name">FOR</h3>
            <h3
              className="card-preview-attr-value"
              data-testid="attr3-card"
            >
              {cardAttr3}
            </h3>
          </div>
        </div>
        <div className="card-preview-lower-container">
          <h3
            className="card-preview-rare"
            data-testid="rare-card"
          >
            {capitalize(cardRare)}
          </h3>
          <p
            className="card-preview-description"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
        </div>
      </div>
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
