import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default class Header extends Component {
  componentDidMount() {
    Aos.init({ duration: 1500 });
  }

  render() {
    return (
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light container-fluid
        align-items-center fixed-top shadow"
          data-aos-mirror="true"
        >
          <a className="navbar-brand p-2 mx-0" href="/">
            <h2 className="h2" data-aos="fade-down" data-aos-duration="1000">
              Tryunfo
            </h2>
          </a>
          <p
            className="text-muted my-1"
            data-aos="fade-down"
          >
            by Rafael de Lima

          </p>
          <ul className="ms-auto navbar-nav">
            <li className="nav-item">
              <a
                href="https://github.com/rafaelimaf"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-primary"
                data-aos="fade-down"
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
