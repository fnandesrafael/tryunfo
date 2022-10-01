import React from 'react';
import '../styles/CardForm.css';

export default function CardForm() {
  return (
    <div className="card-form">
      <h1 className="card-form-title">Crie sua carta</h1>
      <form className="card-form-body">
        <h2 className="card-form-input-title">Nome:</h2>
        <input className="card-form-input" type="text" />
        <p className="card-form-input-text">
          Digite aqui o nome do seu Pokémon
        </p>
        <h2 className="card-form-input-title">Imagem:</h2>
        <input className="card-form-input" type="text" />
        <p className="card-form-input-text">
          Insira abaixo a url de alguma imagem do seu Pokémon
        </p>
        <h2 className="card-form-input-title">Atributos:</h2>
        <div className="attr-inputs">
          <div>
            <h3 className="attr-title">Vitalidade</h3>
            <input className="attr-input" type="number" name="" id="" />
          </div>
          <div>
            <h3 className="attr-title">Velocidade</h3>
            <input className="attr-input" type="number" name="" id="" />
          </div>
          <div>
            <h3 className="attr-title">Força</h3>
            <input className="attr-input" type="number" name="" id="" />
          </div>
        </div>
        <p className="card-form-input-text">
          Agora você pode definir cada um dos três atributos do seu Pokémon
        </p>
        <div className="super-trunfo-container">
          <h2 className="super-trunfo-title">Super trunfo?</h2>
          <input className="super-trunfo-checkbox" type="checkbox" name="" id="" />
        </div>
        <p className="card-form-input-text">
          Decida se essa carta é o seu Super Trunfo, lembre-se de que só
          pode haver um Super Trunfo no seu baralho!
        </p>
        <div className="rarity-container">
          <h2 className="rarity-title">Raridade:</h2>
          <select className="rarity-select" name="" id="">
            <option value="Normal">Normal</option>
            <option value="Raro">Raro</option>
            <option value="Super Raro">Super Raro</option>
          </select>
        </div>
        <p className="card-form-input-text">
          Defina o quão rara é essa nova carta
        </p>
      </form>
      <button
        type="button"
        className="save-card-btn"
      >
        Salvar
      </button>
    </div>
  );
}
