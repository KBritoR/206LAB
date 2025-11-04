
//Aprendizado da aula 3

describe('Teste Desenvolvidos', () => {
  it("Teste de criação do user", () => {
    let Nmber = new Date().getSeconds().toString()
    Nmber = Nmber + Math.floor(Math.random() * 100000000);
    let Nmber_name = new Date().getMinutes().toString()
    Nmber_name = Nmber_name + Math.floor(Math.random() * 100000000);
    let pw = Nmber + Nmber_name 
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(`${pw}COWONE${Nmber_name}`);
    cy.get('[data-qa="signup-email"]').type(`${pw}Kawan@teste${Nmber}.com`);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').type(pw);
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('2');
    cy.get('[data-qa="years"]').select('2021');
    cy.get('[name="optin"]').check();
    cy.get('[name="newsletter"]').check();
    cy.get('[data-qa="first_name"]').type("Kawan");
    cy.get('[data-qa="last_name"]').type("brito");
    cy.get('[data-qa="company"]').type("inatel");
    cy.get('[data-qa="address"]').type("cuba");
    cy.get('[data-qa="address2"]').type("Panama");
    cy.get('[data-qa="country"]').select('New Zealand');
    cy.get('[data-qa="state"]').type("amazonas");
    cy.get('[data-qa="city"]').type("acre");
    cy.get('[data-qa="zipcode"]').type("00028922");
    cy.get('[data-qa="mobile_number"]').type("190");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("contain.text","Account Created!");
    cy.get('[data-qa="continue-button"]').click();
  });
  it("Teste de Login do user", () => {
    let infos = Criar_user()
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(infos[0]);
    cy.get('[data-qa="login-password"]').type(infos[1]);
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header b').should("contain.text",infos[2]);
  });

  it("Teste de Login falha", () => {
    let infos = Criar_user()
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(infos[0]);
    cy.get('[data-qa="login-password"]').type("qualquerSenha");
    cy.get('[data-qa="login-button"]').click();
    cy.get('#form p').should("contain.text","Your email or password is incorrect!");
  });

  it("Teste de Avaliar Produto", () => {
    let infos = Criar_user()
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(infos[0]);
    cy.get('[data-qa="login-password"]').type(infos[1]);
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header a[href="/products"]').click();
    cy.get('a[href="/product_details/1"]').click();
    cy.get('#name').type(infos[2]);
    cy.get('#email').type(infos[0]);
    cy.get('[name="review"]').type("Produto incrivel eu compraria com toda cerveja do mundo");
    cy.get('#button-review').click();
    cy.get('#review-section span').should("contain.text","Thank you for your review.");
  });

    it("Teste de Adicionar algo ao carrinho", () => {
    let infos = Criar_user()
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(infos[0]);
    cy.get('[data-qa="login-password"]').type(infos[1]);
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header a[href="/products"]').click();
    cy.get('a[href="/product_details/1"]').click();
    cy.get('button.cart').click();
    cy.get('#cartModal div.modal-content').should("contain.text","\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tAdded!\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tYour product has been added to cart.\n\t\t\t\t\t\t\t\t\t\tView Cart\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\tContinue Shopping\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t");
  });

    it("Teste Deletar user", () => {
    let infos = Criar_user()
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="login-email"]').type(infos[0]);
    cy.get('[data-qa="login-password"]').type(infos[1]);
    cy.get('[data-qa="login-button"]').click();
    cy.get('#header a[href="/delete_account"]').click();    
    cy.get('[data-qa="account-deleted"]').should("contain.text","Account Deleted!");
  });
});

function Criar_user(){
    let Nmber = new Date().getSeconds().toString()
    Nmber = Nmber + Math.floor(Math.random() * 90000000000000);
    let Nmber_name = Math.floor(Math.random() * 500000000);
    let pw = Math.floor(Math.random() * 300000000);
    let INfo = [`Kawan@${Nmber}.com`,pw,Nmber_name]
    cy.visit('https://automationexercise.com/?utm_source=chatgpt.com')
    cy.get('#header a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(Nmber_name);
    cy.get('[data-qa="signup-email"]').type(`Kawan@${Nmber}.com`);
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').type(pw);
    cy.get('[data-qa="days"]').select('2');
    cy.get('[data-qa="months"]').select('2');
    cy.get('[data-qa="years"]').select('2021');
    cy.get('[name="optin"]').check();
    cy.get('[name="newsletter"]').check();
    cy.get('[data-qa="first_name"]').type("Kawan");
    cy.get('[data-qa="last_name"]').type("brito");
    cy.get('[data-qa="company"]').type("inatel");
    cy.get('[data-qa="address"]').type("cuba");
    cy.get('[data-qa="address2"]').type("Panama");
    cy.get('[data-qa="country"]').select('New Zealand');
    cy.get('[data-qa="state"]').type("amazonas");
    cy.get('[data-qa="city"]').type("acre");
    cy.get('[data-qa="zipcode"]').type("00028922");
    cy.get('[data-qa="mobile_number"]').type("190");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("contain.text","Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get('#header a[href="/logout"]').click();

    return INfo


}











