import React, { useEffect } from 'react';
import Aos from 'aos';
import '../styles/Header.css';
import Eevee from '../assets/images/eevee.png';
import Pokeball from '../assets/images/pokeball.png';
import 'aos/dist/aos.css';

export default function Header() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <header className="header-body">
      <div>
        <img
          src={ Eevee }
          alt="Eevee"
          className="header-eevee"
          data-aos="fade-left"
        />
        <img
          src={ Pokeball }
          alt="Pokébola"
          className="header-pokeball-bg"
        />
        <a href="/">
          <h1 className="header-title" data-aos="fade-right">Pokétrunfo</h1>
        </a>
        <p className="header-text" data-aos="fade-up">
          Crie suas cartas, monte seu baralho e divirta-se!
        </p>
        <img
          className="header-pokeball-1"
          src={ Pokeball }
          alt="Pokébola"
        />
        <img
          className="header-pokeball-2"
          src={ Pokeball }
          alt="Pokébola"
        />
      </div>
      <div className="pokeball-line-header">
        <a
          className="gh-link"
          href="https://github.com/rafaelimaf"
          target="_blank"
          rel="noreferrer"
          data-aos-delay="300"
          data-aos="fade-up"
        >
          Github
        </a>
        <a
          className="in-link"
          href="https://linkedin.com/in/rafaelimaf"
          target="_blank"
          rel="noreferrer"
          data-aos-delay="500"
          data-aos="fade-up"
        >
          Linkedin
        </a>
        <a href="#card-creation">
          <button
            type="button"
            aria-label="button"
            className="pokeball-btn"
          >
            <h3 className="pokeball-btn-text">
              Go!
            </h3>
          </button>
        </a>
      </div>
    </header>
  );
}
