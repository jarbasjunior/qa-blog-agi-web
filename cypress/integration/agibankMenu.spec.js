const navbarPage = require('../pages/navbarPage/NavbarPage');
const columnsPage = require('../pages/columnsPage/columnsPage');

describe('Dado que acesso o menu Agibank > Colunas', () => {
  const expectedTitle = 'Colunas';

  before(() => {
    cy.visit('/');
    navbarPage.goToAgibankCollumnsPage();
  });

  context('Quando página Colunas for acessada deve exibir:', () => {
    it('Título da seção = [Colunas]', () => {
      columnsPage.validationTitleSection(expectedTitle);
    });

    it('Cada artigo da listado com o título = [Colunas]', () => {
      columnsPage.validationTitleArticles(expectedTitle);
    });
  });
});
