import React, { useState, useEffect } from 'react';
import '../styles/CardForm.css';
import PropTypes from 'prop-types';

const ATTRLIMITER = 90;
const ALLATTRSUMLIMITER = 210;

export default function CardForm({ value }) {
  const [isSaveBtnDisabled, setIsSaveBtnDisabled] = useState(true);

  const { cardData, setCardData } = value;

  const handleChanger = ({ target }) => {
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;

    setCardData((prevState) => (
      { ...prevState, [target.name]: inputValue }
    ));
  };

  const saveCard = () => {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo, cardRare, deckCards } = cardData;

    const newCard = {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      cardRare,
    };
    const newDeck = deckCards;

    newDeck.push(newCard);

    localStorage.setItem('deck', JSON.stringify(newDeck));

    if (cardTrunfo) {
      return setCardData({
        ...cardData,
        cardName: '',
        cardImage: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardTrunfo: false,
        cardRare: 'normal',
        hasTrunfo: true,
        deckCards: newDeck,
        filteredDeck: newDeck,
      });
    }
    return setCardData({
      ...cardData,
      cardName: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardTrunfo: false,
      cardRare: 'normal',
      deckCards: newDeck,
      filteredDeck: newDeck,
    });
  };

  useEffect(() => {
    const verifyCardData = () => {
      const { cardName, cardImage, cardDescription,
        cardAttr1, cardAttr2, cardAttr3 } = cardData;
      if (
        cardName !== '' && cardImage !== '' && cardDescription !== ''
          && Number(cardAttr1) >= 0 && Number(cardAttr1) <= ATTRLIMITER
          && Number(cardAttr2) >= 0 && Number(cardAttr2) <= ATTRLIMITER
          && Number(cardAttr3) >= 0 && Number(cardAttr3) <= ATTRLIMITER
          && (Number(cardAttr1) + Number(cardAttr2)
          + Number(cardAttr3)) <= ALLATTRSUMLIMITER
      ) {
        return setIsSaveBtnDisabled(false);
      } return setIsSaveBtnDisabled(true);
    };
    verifyCardData();
  }, [cardData]);

  return (
    <div id="card-creation" className="card-form">
      <h1 className="card-form-title">
        Crie sua carta
      </h1>
      <form className="card-form-body">
        <h2 className="card-form-input-title">
          Nome:
        </h2>
        <input
          type="text"
          className="card-form-input"
          name="cardName"
          value={ cardData.cardName }
          onChange={ handleChanger }
          data-testid="name-input"
        />
        <p className="card-form-input-p">
          Digite aqui o nome do seu Pokémon
        </p>
        <h2 className="card-form-input-title">
          Imagem:
        </h2>
        <input
          className="card-form-input"
          type="text"
          name="cardImage"
          value={ cardData.cardImage }
          onChange={ handleChanger }
          data-testid="image-input"
        />
        <p className="card-form-input-p">
          Insira abaixo a url de alguma imagem do seu Pokémon
        </p>
        <h2 className="card-form-input-title">Descrição:</h2>
        <textarea
          className="card-form-description-input"
          name="cardDescription"
          value={ cardData.cardDescription }
          onChange={ handleChanger }
          data-testid="description-input"
        />
        <p className="card-form-input-p">
          Descreva um pouco mais o seu Pokémon e guarde informações valiosas
        </p>
        <h2 className="card-form-input-title">
          Atributos:
        </h2>
        <div className="attr-inputs">
          <div>
            <h3 className="attr-title">
              Vitalidade
            </h3>
            <input
              className="attr-input"
              type="number"
              name="cardAttr1"
              value={ cardData.cardAttr1 }
              onChange={ handleChanger }
              data-testid="attr1-input"
            />
          </div>
          <div>
            <h3 className="attr-title">
              Velocidade
            </h3>
            <input
              className="attr-input"
              type="number"
              name="cardAttr2"
              value={ cardData.cardAttr2 }
              onChange={ handleChanger }
              data-testid="attr2-input"
            />
          </div>
          <div>
            <h3 className="attr-title">
              Força
            </h3>
            <input
              className="attr-input"
              type="number"
              name="cardAttr3"
              value={ cardData.cardAttr3 }
              onChange={ handleChanger }
              data-testid="attr3-input"
            />
          </div>
        </div>
        <p className="card-form-input-p">
          Agora você pode definir cada um dos três atributos do seu Pokémon
        </p>
        {
          cardData.hasTrunfo ? (
            <h1 className="super-trunfo-title">
              Você já tem um Super Trunfo em seu baralho
            </h1>
          ) : (
            <div className="super-trunfo-container">
              <h2 className="super-trunfo-title">
                Super trunfo?
              </h2>
              <input
                className="super-trunfo-checkbox"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardData.cardTrunfo }
                onChange={ handleChanger }
                data-testid="trunfo-input"
              />
            </div>
          )
        }
        <p className="card-form-input-p">
          Decida se essa carta é o seu Super Trunfo, lembre-se de que só
          pode haver um Super Trunfo no seu baralho!
        </p>
        <div className="rarity-container">
          <h2 className="rarity-title">
            Raridade:
          </h2>
          <select
            className="rarity-select"
            name="cardRare"
            value={ cardData.cardRare }
            onChange={ handleChanger }
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <p className="card-form-input-p">
          Defina o quão rara é essa nova carta
        </p>
      </form>
      <a href={ `#${cardData.deckCards.length - 1}` }>
        <button
          className="save-card-btn"
          type="button"
          disabled={ isSaveBtnDisabled }
          data-testid="save-button"
          onClick={ saveCard }
        >
          Salvar
        </button>
      </a>
    </div>
  );
}

CardForm.propTypes = {
  value: PropTypes.shape({
    cardData: PropTypes.objectOf.isRequired,
    setCardData: PropTypes.func.isRequired,
  }).isRequired,
};
