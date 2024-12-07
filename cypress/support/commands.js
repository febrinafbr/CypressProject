// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",(email, password) => {
    cy.contains('a', 'Sign In').click();
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#send2").click();
    cy.wait(1000);
    cy.get('span.logged-in').should(
        "contain",
        "Welcome"
    );
});

Cypress.Commands.add("verifyHaveText", (locator, text) => {
    cy.get(locator).should("have.text", text);
});

Cypress.Commands.add("verifyContain", (locator, text) => {
    cy.get(locator).should("contain", text);
});