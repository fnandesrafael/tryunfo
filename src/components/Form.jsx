import React, { Component } from 'react';

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
        // hasTrunfo,
        isSavedButtonDisable,
        onInputChange,
        onSaveButtonClick,
      } = this.props;
    return (
      <div>
        <label htmlFor="cardName">
          Nome:
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
          />
        </label>
        <br />
        <label htmlFor="cardImage">
          Imagem
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Atributo 1
          <input
            name="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <br />
        <label htmlFor="attr2">
          Atributo 2
          <input
            name="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <br />
        <label htmlFor="attr3">
          Atributo 3
          <input
            name="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <br />
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>
        <br />
        <label htmlFor="cardRare">
          <select
            name="cardRare"
            data-testId="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="description">
          <textarea
            name="description"
            cols="30"
            rows="10"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSavedButtonDisable }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}
