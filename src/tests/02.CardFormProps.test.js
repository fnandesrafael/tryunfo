import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardForm from '../components/CardForm';

const cardData = {
  cardName: "Nome da carta",
  cardDescription: "Descrição da carta",
  cardAttr1: "12",
  cardAttr2: "34",
  cardAttr3: "56",
  cardImage: "url-to-image",
  cardRare: "raro",
  cardTrunfo: true,
}

describe("2 - Adicione as props necessárias ao componente de formulário", () => {
  it("Será validado se o campo de nome recebe o valor da prop `cardName` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/name-input/i);

    expect(input).toHaveValue("Nome da carta");
    
    userEvent.type(input, "Novo nome");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo de descrição recebe o valor da prop `cardDescription` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/description-input/i);

    expect(input).toHaveValue("Descrição da carta");
    
    userEvent.type(input, "Nova descrição");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 1 recebe o valor da prop `cardAttr1` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/attr1-input/i);

    expect(input).toHaveValue(12);
    
    userEvent.type(input, "21");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 2 recebe o valor da prop `cardAttr2` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/attr2-input/i);

    expect(input).toHaveValue(34);
    
    userEvent.type(input, "43");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo do atributo 3 recebe o valor da prop `cardAttr3` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/attr3-input/i);

    expect(input).toHaveValue(56);
    
    userEvent.type(input, "65");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo de imagem recebe o valor da prop `cardImage` e se o hook `setCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/image-input/i);

    expect(input).toHaveValue("url-to-image");
    
    userEvent.type(input, "new-ur-to-image");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo de raridade recebe o valor da prop `cardRare` e se o hook `seCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/rare-input/i);

    expect(input).toHaveValue("raro");
    
    userEvent.selectOptions(input, "muito raro");
    expect(setCardData).toHaveBeenCalled();
  });

  it("Será validado se o campo de Super Trunfo recebe o valor da prop `cardTrunfo` e se o hook `seCardData` é chamado quando o campo sofre alguma alteração", () => {
    const setCardData = jest.fn();
    render(<CardForm value={{cardData, setCardData}}/>);
    const input = screen.getByTestId(/trunfo-input/i);

    expect(input).toBeChecked();
    
    userEvent.click(input);
    expect(setCardData).toHaveBeenCalled();
  });
});