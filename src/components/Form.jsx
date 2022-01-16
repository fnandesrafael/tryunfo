import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

export default class Form extends Component {
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
        isSaveButtonDisabled,
        onInputChange,
        onSaveButtonClick,
        hasTrunfo,
      } = this.props;
    return (
      <div className="form-body">
        <label
          htmlFor="cardName"
          className="name-space"
        >
          <h3>Nome:</h3>
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label
          htmlFor="cardImage"
          className="image-space"
        >
          <h3>Imagem:</h3>
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <div className="attribute-spaces">
          <label
            htmlFor="attr1"
            className="attribute-space"
          >
            <h3>Atributo 1</h3>
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <br />
          <label
            htmlFor="attr2"
            className="attribute-space"
          >
            <h3>Atributo 2</h3>
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <br />
          <label
            htmlFor="attr3"
            className="attribute-space"
          >
            <h3>Atributo 3</h3>
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <br />
        </div>
        <div className="rarity-spaces">
          {
            hasTrunfo ? (
              <p>Você já tem um Super Trunfo em seu baralho.</p>
            ) : (
              <label
                htmlFor="cardTrunfo"
                className="trunfo-space"
              >
                <h3>Super Trunfo</h3>
                <input
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )
          }
          <br />
          <label htmlFor="cardRare">
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <br />
        </div>
        <label
          htmlFor="description"
          className="description-space"
        >
          <textarea
            name="cardDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            className="description-input"
          />
        </label>
        <br />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="save-btn"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.bool.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
