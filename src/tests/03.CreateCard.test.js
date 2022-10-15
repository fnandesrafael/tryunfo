import React from 'react';
import { render, screen } from '@testing-library/react';
import CardPreview from '../components/CardPreview';

const defaultProps = {
  cardName: "Nome da carta",
  cardDescription: "Descrição da carta",
  cardAttr1: "12",
  cardAttr2: "34",
  cardAttr3: "56",
  cardImage: "url-to-image",
  cardRare: "raro",
  cardTrunfo: true,
}

const defaultPropsWithValidImage = {
  ...defaultProps, cardImage: "https://archives.bulbagarden.net/media/upload/thumb/1/17/025Pikachu-Original.png/600px-025Pikachu-Original.png"
}

describe("3 - Crie e renderize o componente CardPreview com as props necessárias", () => {
  it("Será validado se o componente `data-testid=name-card` é exibido e possui o valor da prop `cardName`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/name-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Nome da carta");
  });

  it(`Será validado se o componente "data-testid=image-card" é exibido e possui o atributo "src" com o valor da prop "cardImage" e o atributo alt com o valor da prop "cardName"
  quando o valor equivale à uma imagem`, () => {
    render(<CardPreview value={defaultPropsWithValidImage} />);
    const image = screen.getByTestId(/image-card/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://archives.bulbagarden.net/media/upload/thumb/1/17/025Pikachu-Original.png/600px-025Pikachu-Original.png");
    expect(image).toHaveAttribute("alt", "Nome da carta");
  });

  it("Será validado se o componente `data-testid=image-card` não é exibido, enquanto o componente `data-testid=image-card-default` é exibido quando o atributo `cardImage` não é uma imagem válida", () => {
    render(<CardPreview value={defaultProps} />);
    const notImageComponent = screen.getByTestId(/image-card-default/i);

    expect(notImageComponent).toBeInTheDocument();
  });

  it("Será validado se o componente `data-testid=description-card` é exibido e possui o valor da prop `cardDescription`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/description-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Descrição da carta");
  });

  it("Será validado se o componente `data-testid=attr1-card` é exibido e possui o valor da prop `cardAttr1`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/attr1-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("12");
  });

  it("Será validado se o componente `data-testid=attr2-card` é exibido e possui o valor da prop `cardAttr2`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/attr2-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("34");
  });

  it("Será validado se o componente `data-testid=attr3-card` é exibido e possui o valor da prop `cardAttr3`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/attr3-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("56");
  });

  it("Será validado se o componente `data-testid=rare-card` é exibido e possui o valor da prop `cardRare`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/rare-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("Raro");
  });

  it("Será validado se o componente `data-testid=trunfo-card` é exibido quando a prop `cardTrunfo` tiver o valor `true`", () => {
    render(<CardPreview value={defaultProps} />);
    const text = screen.getByTestId(/trunfo-card/i);
    expect(text).toBeInTheDocument();
    expect(text).toHaveTextContent("⭐");
  });

  it("Será validado se o componente `data-testid=trunfo-card` não é exibido quando a prop `cardTrunfo` tiver o valor `false`", () => {
    render(<CardPreview value={{...defaultProps, cardTrunfo: false}}/>);
    const text = screen.queryByTestId(/trunfo-card/i);
    expect(text).not.toBeInTheDocument();
  });
});