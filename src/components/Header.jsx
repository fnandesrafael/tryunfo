import React from 'react';
import '../styles/Header.css';
import Eevee from '../images/eevee.png';
import Pokeball from '../images/pokeball.png';

export default function Header() {
  return (
    <header className="header-body">
      <div>
        <img
          src={ Eevee }
          alt="Eevee"
          className="header-eevee"
        />
        <h1 className="header-title">Pokétrunfo</h1>
        <p className="header-text">
          Crie suas cartas, monte seu baralho e divirta-se!
        </p>
        <img className="header-pokeball-1" src={ Pokeball } alt="Pokébola" />
        <img className="header-pokeball-2" src={ Pokeball } alt="Pokébola" />
      </div>
      <div className="pokeball-line-header">
        <a
          className="gh-link"
          href="https://github.com/rafaelimaf"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="in-link"
          href="https://linkedin.com/in/rafaelimaf"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <button
          type="button"
          aria-label="button"
          className="pokeball-btn"
        >
          <h3 className="pokeball-btn-text">
            Go!
          </h3>
        </button>
      </div>
    </header>
  );
}
