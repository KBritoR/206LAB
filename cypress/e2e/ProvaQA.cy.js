function login() {
  cy.visit('https://www.demoblaze.com/index.html');
  cy.get('#login2').click();
  cy.wait(4000)
  cy.get('#loginusername').should('be.visible').type("Kawan");
  cy.wait(2000)
  cy.get('#loginpassword').should('be.visible').type("Brito");
  cy.get('#logInModal button.btn-primary').click();
  cy.wait(2000)
}

describe('Testes', () => {

  it('Login', () => {
    login();
    cy.get('#signInModal', { timeout: 5000 }).should('not.be.visible');
  });

  it('Adicionar item ao carrinho', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#tbodyid .card-title a').first().click();
    cy.contains('Add to cart').click();
    cy.get('#cartur').click();
    cy.get('#tbodyid tr td:nth-child(2)')
      .should('contain.text', 'Samsung galaxy s6');
  });

  it('Deletar item do carrinho', () => {
    login();
    cy.get('#tbodyid .card-title a').first().click();
    cy.contains('Add to cart').click();
    cy.get('#cartur').click();
    cy.contains('Delete').click();
    cy.get('#tbodyid tr').should('not.exist');
  });

    it('Teste Login', () => {
    login()
    cy.get('#nameofuser').click().should('contain.text', 'Welcome Kawan');
    
  });

    it('Erro Login', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.get('#login2').click();
    cy.wait(4000)
    cy.get('#loginusername').should('be.visible').type("Kawan");
    cy.wait(2000)
    cy.get('#loginpassword').should('be.visible').type("errado");
    cy.get('#logInModal button.btn-primary').click();
    cy.wait(2000)
    cy.get('#logInModalLabel').should('be.visible');
    
  });

});



