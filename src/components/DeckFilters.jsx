import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeckFilters extends Component {
  render() {
    const { onChangeNameFilter } = this.props;
    return (
      <div className="filters">
        <div className="filter-group">
          <h3 className="filter-label">Pesquisar carta:</h3>
          <input
            type="text"
            data-testid="name-filter"
            onChange={ onChangeNameFilter }
            className="deck-filter"
          />
        </div>
      </div>
    );
  }
}

DeckFilters.propTypes = {
  onChangeNameFilter: PropTypes.func.isRequired,
};
