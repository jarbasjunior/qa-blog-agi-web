import navbarPage from '../pages/navbarPage/NavbarPage';
import articlesPage from '../pages/articlesPage/articlesPage';

describe('Dado que acesso o menu Agibank > Colunas', () => {
  const expectedTitle = 'Colunas';

  before(() => {
    cy.visit('/');
    navbarPage.goToAgibankCollumnsPage();
  });

  context('Quando página Colunas for acessada deve exibir:', () => {
    it(`Título da seção = [${expectedTitle}]`, () => {
      articlesPage.validationTitleSection(expectedTitle);
    });

    it(`Cada artigo da listado com o título = [${expectedTitle}]`, () => {
      articlesPage.validationTitleArticles(expectedTitle);
    });
  });
});

describe('Dado que acesso o menu Agibank > Notícias', () => {
  const expectedTitle = 'Notícias';

  before(() => {
    cy.visit('/');
    navbarPage.goToAgibankNoticiesPage();
  });

  context('Quando página Notícias for acessada deve exibir:', () => {
    it(`Título da seção = [${expectedTitle}]`, () => {
      articlesPage.validationTitleSection(expectedTitle);
    });

    it(`Cada artigo da listado com o título = [${expectedTitle}]`, () => {
      articlesPage.validationTitleArticles(expectedTitle);
    });
  });
});

describe('Dado que acesso o menu Agibank > Carreira', () => {
  const expectedTitle = 'Carreira';

  before(() => {
    cy.visit('/');
    navbarPage.goToAgibankCareerPage();
  });

  context('Quando página Carreira for acessada deve exibir:', () => {
    it(`Título da seção = [${expectedTitle}]`, () => {
      articlesPage.validationTitleSection(expectedTitle);
    });

    it(`Cada artigo da listado com o título = [${expectedTitle}]`, () => {
      articlesPage.validationTitleArticles(expectedTitle);
    });
  });
});
