const locators = require('./locators');

class NavbarPage {
  static goToAgibankCollumnsPage() {
    this.openMenuAgibank();
    cy.get(locators.agibank.collumns).should('be.visible');
    cy.get(locators.agibank.collumns).click();
  }

  static goToAgibankNoticiesPage() {
    this.openMenuAgibank();
    cy.get(locators.agibank.noticies).should('be.visible');
    cy.get(locators.agibank.noticies).click();
  }

  static goToAgibankCareerPage() {
    this.openMenuAgibank();
    cy.get(locators.agibank.career).should('be.visible');
    cy.get(locators.agibank.career).click();
  }

  static openMenuAgibank() {
    cy.get(locators.agibank.root).realHover('mouse');
  }
}

export default NavbarPage;
