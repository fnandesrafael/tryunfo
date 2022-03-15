import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light container-fluid
        align-items-center fixed-top shadow"
        >
          <a className="navbar-brand p-2 mx-0" href="/">
            <h2 className="h2">
              Tryunfo
            </h2>
          </a>
          <p className="text-muted my-1">by Rafael de Lima</p>
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a
                href="https://github.com/rafaelimaf"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-primary"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
