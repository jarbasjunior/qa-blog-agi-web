# Testes UI Blog do Agi

Projeto de testes UI na aplicação https://blogdoagi.com.br, com integração dos testes no Github Actions e relatórios exibidos no https://dashboard.cypress.io.

---

## Índice: 📋
- [Requisitos](#requisitos)

  - [Node.js e NPM](#nodejs-e-npm)

- [Configuração do ambiente](#ambiente)

- [Execução dos testes](#testes)

- [Pacotes utilizados](#pacotes-utilizados)

  - [Cypress](#cypress)
  - [Cypress Real Events](#cypress-real-events)
  - [Mochawesome](#mochawesome)
  - [ESlint](#eslint)
  - [Husky](#husky)

---

## <a id="requisitos"/> Requisitos: ❗

* <a id="nodejs-e-npm"/> [Node.js e NPM](https://nodejs.org/en/download) - Node.js como ambiente de execução para criar e executar aplicações em Javascript. E o NPM para: instalação de pacotes, gerenciamento de versões e dependências.

## <a id="ambiente"/> Configuração do ambiente: 🛠️ </a>

* Na pasta raiz do projeto, execute o comando `npm install`, para instalar todas as dependências do projeto.

## <a id="testes"/> Execução dos testes: 🚀 </a>

* Na pasta raiz do projeto, execute o comando `npm test`, para executar toda a suíte de testes do projeto.

- Dentro do projeto acesse: 
  - `cypress > reports` e procure pelo arquivo com a extensão `.html` para visualizar o relatório dos testes em um navegador de sua preferência.
  <div style="display: flex; justify-content: center; align-items: center;">
    <img src="https://github.com/jarbasjunior/qa-blog-agi-web/assets/6724302/52d740c4-60a5-4487-9a3d-7f5787c057f0" alt="Imagem de exemplo" width="400" height="200">
  </div>

  - `cypress > videos` para visualizar as evidências das execuções dos testes em vídeos.
  
  https://github.com/jarbasjunior/qa-blog-agi-web/assets/6724302/b381a5c9-8d81-4d73-9251-49d12fc39d1d

---
## <a id="pacotes-utilizados"/> Pacotes utilizados: 📦 📚 </a>

💡 Todas as bibliotecas abaixo já serão instaladas quando o comando `npm install` for executado. A seguir são listadas as bibliotecas utilizadas neste projeto, finalidade e instalação.

* <a id="cypress"/> [Cypress](https://www.cypress.io) - Como ferramenta de teste de front-end web.

  * ### Instalação do Cypress ⚙️

    - Execute o comando `npm install cypress --save-dev` para instalar as dependências do **Cypress** na versão mais recente.

* <a id="cypress-real-events"/> [Cypress Real Events](https://www.npmjs.com/package/cypress-real-events) - Biblioteca usada para simular eventos de flutuação do cursor (mouse hover).

  * ### Instalação do Cypress Real Events ⚙️

    - Execute o comando `npm install cypress-real-events --save-dev` para instalar as dependências do **Cypress Real Events** na versão mais recente.

* <a id="mochawesome"/> [Mochawesome](https://www.npmjs.com/package/mochawesome) - Biblioteca usada para geração de raltórios.

  * ### Instalação do Mochawesome ⚙️

    - Execute o comando `npm install mochawesome --save-dev` para instalar as dependências do **Mochawesome** na versão mais recente.

* <a id="eslint"/> [ESlint](https://www.npmjs.com/package/cypress-real-events) - Biblioteca usada como lint para análise e correção de código JavaScript.

  * ### Instalação ESlint ⚙️

    - Na pasta raiz do projeto, execute o comando abaixo para instalar o eslint como uma dependência de desenvolvimento do projeto.
      ```
      npm i -D eslint
      ```
    - Na pasta raiz do projeto, execute o comando `node_modules/.bin/eslint --init` abaixo para configurar o eslint, em seguida responda as seguintes perguntas abaixo, conforme respostas exibidas:

      | <center>PERGUNTA</center> | RESPOSTA |
      |-----------|:-----------:|
      | <span style="color:magenta">How would you like to use ESLint?</span> | <span style="color:cyan">To check syntax, find problems, and enforce code style</span>  |
      | <span style="color:magenta">What type of modules does your project use?</span> | <span style="color:cyan">CommonJS (require/exports)</span>  |
      | <span style="color:magenta">Which framework does your project use?</span> | <span style="color:cyan">None of these</span>  |
      | <span style="color:magenta">Does your project use TypeScript?</span> | <span style="color:cyan">No</span>  |
      | <span style="color:magenta">Where does your code run?</span> | <span style="color:cyan">Node (press `<i>` to invert selection)</span>  |
      | <span style="color:magenta">How would you like to define a style for your project?</span> | <span style="color:cyan">Use a popular style guide</span>  |
      | <span style="color:magenta">Which style guide do you want to follow?</span> | <span style="color:cyan">Airbnb: http://github.com/airbnb/javascript</span>  |
      | <span style="color:magenta">What format do you want your config file to be in?</span> | <span style="color:cyan">JSON</span>  |
      | <span style="color:magenta">Would you like to install them now with npm?</span> | <span style="color:cyan">Yes</span>  |

    - Abra o arquivo `.eslintrc.json` e adicione dentro da chave `rules` a outra chave `"no-console": "off"`, para que o lint não reclame do comando `console.log();`, pois durante o desenvolvimento ele poderá ser utilizado com frequencia.

    - Por fim, no arquivo `package.json`, adicione na chave `scripts`, o novo script: `"lint": "eslint test/** src/** --fix"`. Desta forma, quando for executado na raiz do projeto o comando `npm run lint`, serão corrigidas as infrações que o eslint considera como autocorrigível de acordo com o *guide* Airbnb que foi configurado anteriomente.

* <a id="husky"/> [Husky](https://www.npmjs.com/package/husky) - Para realização de tarefas antes do commit, por exemplo: varredura do lint e execução dos testes.

  * ### Instalação do Husky ⚙️

    - Execute o comando `npm i husky@7.0.4 --save-dev` para instalar as dependências do **Husky** no ambiente de desenvolvimento, na versão 7.0.4 sem atualização automática no futuro.

    - Agora, execute os comandos abaixo os quais irão realizar as seguintes tarefas:
      - Criar o script `prepare` no arquivo `package.json`
      - Exeutar o script `prepare` para ativar o *hook* no *git*
      - Criar o arquivo `pre-commit`, no qual serão gravadas pelo **Husky** as tarefas a serem realizadas antes do *commit*.
        ```
        npm pkg set scripts.prepare="husky install" &&
        npm run prepare &&
        npx husky add .husky/pre-commit "npm run lint-check" &&
        git add .husky/pre-commit
        ```
