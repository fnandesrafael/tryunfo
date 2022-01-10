import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: true,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
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
    console.log('ola');
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
      } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ false }
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
    );
  }
}

export default App;
