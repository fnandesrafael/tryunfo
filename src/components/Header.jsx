import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-title">Tryunfo</h1>
        <p className="header-subtitle">By Rafael de Lima</p>
        <a
          href="https://github.com/rafaelimaf"
          target="_blank"
          rel="noreferrer"
          className="github-link"
        >
          Github

        </a>
      </header>
    );
  }
}
