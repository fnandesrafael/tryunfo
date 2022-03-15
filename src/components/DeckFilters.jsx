import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeckFilters extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div
        className="container-fluid d-flex flex-column bg-dark text-light mb-5
      shadow"
      >
        <h2
          className="fs-2 text-center py-5 mb-0 border-bottom text-light
        bg-dark"
        >
          Seu Deck
        </h2>
        <div className="container-fluid">
          <h3 className="fs-5 mt-3">Filtrar por nome:</h3>
          <input
            name="nameFilter"
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            className="form-control"
          />
        </div>
        <div className="container-fluid">
          <h3 className="fs-5 mt-3">Filtrar por raridade:</h3>
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            className="form-select"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="container-fluid d-flex flex-row align-items-center mt-3 mb-3">
          <h5 className="fs-5 m-0 me-3">Somente Super Trunfo</h5>
          <label
            htmlFor="trunfoFilter"
            className="form-check-label"
          >
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              onChange={ onInputChange }
              className="form-check-input"
            />
          </label>
        </div>
      </div>
    );
  }
}

DeckFilters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
