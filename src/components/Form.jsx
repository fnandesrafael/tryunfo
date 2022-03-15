import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="container-fluid d-flex flex-column w-75">
        <label htmlFor="cardName">
          <h3 className="fs-5">
            Nome:
          </h3>
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
            className="form-control"
          />
        </label>
        <label
          htmlFor="cardImage"
          className="image-space"
        >
          <h3 className="fs-5 mt-3">
            Imagem:
          </h3>
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
            className="form-control"
          />
        </label>
        <div
          className="container-fluid d-flex flex-row justify-content-between p-0
        align-items-center"
        >
          <label htmlFor="attr1">
            <h3 className="fs-5 mt-3">
              Atributo 1:
            </h3>
            <input
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
              className="form-control"
            />
          </label>
          <label htmlFor="attr2">
            <h3 className="fs-5 mt-3">
              Atributo 2:
            </h3>
            <input
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
              className="form-control"
            />
          </label>
          <label htmlFor="attr3">
            <h3 className="fs-5 mt-3">
              Atributo 3:
            </h3>
            <input
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
              className="form-control"
            />
          </label>
        </div>
        <div
          className="container-fluid d-flex flex-row justify-content-between
        align-items-center p-0 mt-3"
        >
          {
            hasTrunfo ? (
              <p className="fs-6 m-0 text-muted">
                Você já tem um Super Trunfo em seu baralho.
              </p>
            ) : (
              <>
                <h3 className="fs-5 m-0">
                  Super Trunfo
                </h3>
                <label
                  htmlFor="cardTrunfo"
                  className="form-check-label"
                >
                  <input
                    name="cardTrunfo"
                    type="checkbox"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    className="form-check-input"
                  />
                </label>
              </>
            )
          }
          <h3 className="fs-5 m-0 mx-3">
            Raridade:
          </h3>
          <label htmlFor="cardRare">
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              className="form-select"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
        </div>
        <textarea
          name="cardDescription"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
          className="form-control mt-3 h-75"
        />
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          className="btn btn-primary w-25 align-self-center mt-3"
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
