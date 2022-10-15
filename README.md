# Projeto Tryunfo

<!-- <a href="https://rafaelimaf.github.io/project-tryunfo/" >Execute a aplicação clicando aqui!<a> -->

## Contexto
Esse projeto foi desenvolvido no módulo frontend da minha formação em desenvolvimento web fullstack. No módulo em específico deste projeto, tive o desafio de administrar estados de um componente com a biblioteca `ReactJS`. O conteúdo no entanto, tratava de manipulações de estado em **Componentes de Classe**. Após entregar o projeto porém, decidi refatorá-lo por completo. Transformando a aplicação, até então utilizando **Programada Orientada à Objetos(POO)**, em uma aplicação arquiteturada no paradigma de **Programação Funcional**, consumindo os tão famosos *React Hooks*, tecnologias da própria biblioteca ReactJS.

## Conceito
A aplicação é composta por um **Componente Controlado** que funciona como um formulário, guardando os dados que o usuário fornece, através dos campos preenchidos; no estado da aplicação e os transformando em cartas ao estilo Super-trunfo. Sendo assim possível criar um baralho, que fica salvo no *localStorage*, do navegador. Por fim também é possível filtrar as cartas, já salvas no baralho, por: nome, raridade ou trunfo.

## Tecnologias utilizadas 
- [Javascript](https://www.javascript.com/)
- [ReactJS](https://reactjs.org/)
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [NodeJS](https://nodejs.org/en/about/)
- [Docker](https://www.docker.com/)

> Outras bibliotecas, ferramentas e dependências: [Aos](https://www.npmjs.com/package/aos), [Jest](https://jestjs.io/pt-BR/), [RTL](https://testing-library.com/docs/react-testing-library/intro/), [ESlint](https://eslint.org/), [Stylelint](https://stylelint.io/)

## Instruções para Execução:

#### ⚠️ Requisitos Mínimos
Para que o projeto possa ser executado localmente, é necessário que você possua instalado em seu sistema, o [Docker](https://www.docker.com/).

O `Docker` é uma ferramenta de gerenciamento de ambientes, através de containers e imagens, quais serão utilizados nesse projeto para subir a aplicação em ambiente `Node` na versão `14-alpine`.

<details>
  <summary>
    <b>🐋 Subindo o Container da Aplicação</b>
  </summary>

  Após realizar o clone do repositório, e já com o `Docker` devidamente instalado. Na raíz do projeto, rode o seguinte comando no terminal:

  ```cli
  docker build -t react-app-dockerized .
  ```
  > Esse comando deverá montar a imagem "react-app-dockerized" que se encontra no "Dockerfile" da raíz do projeto.

  Se tudo ocorrer bem, com o comando: `docker images` será possível visualizar a imagem montada: `react-app-dockerized`. Agora, já é possível subir o container com o nosso ambiente de desenvolvimento. Para isso, rode o comando abaixo:

  ```cli
  docker run --name react-app-dockerized -v $(pwd):/app -p 3000:3000 -d react-app-dockerized
  ```
  > O comando acima irá construir o container "react-app-dockerized", através da imagem de mesmo nome. Com as flags "-v" o container estará mapeando o volume passado, o que significa que qualquer alteração nos arquivos também serão captadas no container. Com a flag "-p" é feito o bind da porta do container(3000) com a sua porta local 3000. E por fim, com a flag "-d" o container será executado desanexado do terminal.

  Agora basta ir até o seu endereço `localhost:3000/` e a aplicação estará rodando em ambiente de desenvolvimento!
</details>

<details>
  <summary>
    <b>🧪 Execução de Testes e CI</b>
  </summary>

  Todos os `Testes`, assim como as configurações de `ESlint` e `Stylelint` fazem parte do fluxo de CI do projeto. Caso queira realizar os testes da aplicação, basta que você se anexe ao terminal do container com o comando:

  ```cli
  docker exec -it react-app-dockerized sh
  ```

  E agora no terminal anexado, rode o comando:

  ```cli
  npm run test:dev
  ```
  >Esse comando rodará todos os testes do projeto. Caso prefira, rode o comando `npm run test:dev *01*`, ou o número de qualquer outro teste, para rodá-lo em específico.
</details>

## Propriedade intelectual e referências:
Toda a aplicação foi desenvolvida por mim de forma independente, sendo necessário isto, para a aprovação do projeto. Toda a criação e implementação de Componentes, Estilos e Lógica para o cumprimento dos requisitos do projeto, por mim foram feitas.

**No entanto, todos os arquivos de testes foram inicialmente desenvolvidos pela [Trybe](https://www.betrybe.com/), até o momento da avaliação final, onde por motivos obvios, eu não os poderia manipular. Após a minha aprovação e o inicio da refatoração do projeto, grande parte dos testes foram reimplementados por mim, para que pudessem entrar no contexto de uma aplicação Funcional, visto que foram desenvolvidos para uma aplicação Orientada à Objetos.**
