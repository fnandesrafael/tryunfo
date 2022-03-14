import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeckFilters extends Component {
  render() {
    const { onInputChange, onClickFilter } = this.props;
    return (
      <div className="filters">
        <div className="filter-group">
          <h3 className="filter-label">Filtrar por nome:</h3>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ onInputChange }
            className="deck-filter"
            name="nameFilter"
          />
        </div>
        <div className="filter-group">
          <h3 className="filter-label">Filtrar por raridade:</h3>
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onInputChange }
            className="deck-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          <button
            type="button"
            data-testid="filter-btn"
            onClick={ onClickFilter }
          >
            Filtrar

          </button>
        </div>
      </div>
    );
  }
}

DeckFilters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onClickFilter: PropTypes.func.isRequired,
};
