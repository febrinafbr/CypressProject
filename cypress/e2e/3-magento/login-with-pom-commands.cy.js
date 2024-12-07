const loginPage = require("../../support/pageObject/loginPage");
const userData = require("../../fixtures/login.json");
const userArray = require("../../fixtures/login-array.json");

describe("Login", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
        cy.contains('a', 'Sign In').click();
    });
    it("Success login", () => {
        cy.get(loginPage.email).type(userData.validEmail);
        cy.get(loginPage.password).type(userData.validPass);
        cy.get(loginPage.login_btn).click();
        cy.wait(1000);
        cy.verifyContain(loginPage.success_msg, userData.successMsg);
    });
    it("Failed login - wrong email", () => {
        loginPage.inputEmail(userArray.invalidUser[0].usernm);
        loginPage.inputPassword(userArray.invalidUser[0].passw);
        cy.get(loginPage.login_btn).click();
        cy.wait(1000);
        cy.verifyHaveText(loginPage.error_msg, userData.errorMsg);
    });
    it("Failed login - wrong password", () => {
        loginPage.inputEmail(userArray.invalidUser[1].usernm);
        loginPage.inputPassword(userArray.invalidUser[1].passw);
        cy.get(loginPage.login_btn).click();
        cy.wait(1000);
        cy.verifyHaveText(loginPage.error_msg, userData.errorMsg);
    });
});