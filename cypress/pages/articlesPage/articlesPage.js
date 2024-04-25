const locators = require('./locators');

class ArticlesPage {
  static validationTitleSection(expectedTitle) {
    cy.get(locators.sectionTitle).should('have.text', expectedTitle).and('be.visible');
  }

  static validationTitleArticles(expectedTitle) {
    cy.get(locators.articlesList)
      .find(locators.article)
      .each(($article) => {
        cy.wrap($article)
          .scrollIntoView()
          .find(locators.articleTitle)
          .should('contain', expectedTitle)
          .and('be.visible');
      });
  }
}

export default ArticlesPage;
