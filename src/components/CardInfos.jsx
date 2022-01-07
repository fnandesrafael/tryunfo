import React, { Component } from 'react';
import cardInfosData from '../data/cardInfosData';

export default class CardInfos extends Component {
  render() {
    return (
      <div>
        { cardInfosData.map((info) => (
          <div key={ info.name }>
            <label
              htmlFor={ info.name }
            >
              <h3>{info.title}</h3>
              <input
                type={ info.type }
                name={ info.name }
                data-testid={ info.testId }
              />
            </label>
            <br />
          </div>
        )) }
      </div>
    );
  }
}
