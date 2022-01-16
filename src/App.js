import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/header.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: true,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      tryunfoDeck: [],
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.ableButton);
  }

  /**
   * Consultado o repositório do aluno Pedro Goulart como referência para o uso do método Number()
   * Link -> https://github.com/tryber/sd-017-project-tryunfo/pull/57/commits/aca956df5135f59eb6717ff9efe327020516a4b1
   */

  ableButton = () => {
    // Desconstrução dos estados
    const { cardName, cardImage, cardDescription, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    // Variáveis para não usar magic number nas verificações condicionais
    const ATTRLIMITER = 90;
    const ALLATTRSUMLIMITER = 210;
    // Estruturas condicionais
    if (
      cardName !== '' && cardImage !== '' && cardDescription !== '' && cardRare !== ''
      && Number(cardAttr1) >= 0 && Number(cardAttr1) <= ATTRLIMITER
      && Number(cardAttr2) >= 0 && Number(cardAttr2) <= ATTRLIMITER
      && Number(cardAttr3) >= 0 && Number(cardAttr3) <= ATTRLIMITER
      && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= ALLATTRSUMLIMITER
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardTrunfo,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    this.setState((prevState) => ({
      tryunfoDeck: [...prevState.tryunfoDeck, {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardTrunfo,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      }],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: cardTrunfo ? true : prevState.hasTrunfo,
    }));
  }

  render() {
    const
      {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        isSaveButtonDisabled,
        hasTrunfo,
        tryunfoDeck,
      } = this.state;
    return (
      <div>
        <header className="tryunfo-header">
          <h1 className="header-title">Tryunfo</h1>
        </header>
        <div className="create-card-space">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        {
          tryunfoDeck.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
