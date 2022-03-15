import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/DeckFilters.css';

export default class DeckFilters extends Component {
  render() {
    const { onInputChange } = this.props;
    return (
      <div className="filters">
        <div className="filter-group">
          <h3 className="filter-heading">Filtrar por nome:</h3>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            className="deck-filter"
            name="nameFilter"
          />
        </div>
        <div className="filter-group">
          <h3 className="filter-heading">Filtrar por raridade:</h3>
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            className="deck-filter-select"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </div>
        <div className="checkbox-group">
          <h5 className="filter-heading">Somente Super Trunfo:</h5>
          <label
            htmlFor="trunfoFilter"
          >
            <input
              type="checkbox"
              data-testid="trunfo-filter"
              name="trunfoFilter"
              className="trunfo-filter-input"
              onChange={ onInputChange }
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
