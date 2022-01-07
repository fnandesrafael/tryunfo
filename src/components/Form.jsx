import React, { Component } from 'react';
import CardInfos from './CardInfos';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <CardInfos />
        <label htmlFor="rarity">
          <select
            name="rarity"
            data-testId="rare-input"
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
          />
        </label>
        <br />
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </div>
    );
  }
}
