describe("Create an Account", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
        cy.contains('a', 'Create an Account').click();
    });

    it("Success create an account", () => {
        cy.get("#firstname").type("Doni");
        cy.get("#lastname").type("Setiawan");
        cy.get("#email_address").type("doni15@gmail.com");
        cy.get("#password").type("Doni-123");
        cy.get("#password-confirmation").type("Doni-123");
        cy.contains('button', 'Create an Account').click();
        cy.url().should("include", "/customer/account/")
    });
    it("Failed create an account - registered email", () => {
        cy.get("#firstname").type("Doni");
        cy.get("#lastname").type("Setiawan");
        cy.get("#email_address").type("doni15@gmail.com");
        cy.get("#password").type("Doni-125");
        cy.get("#password-confirmation").type("Doni-125");
        cy.contains('button', 'Create an Account').click();
        cy.get('.message-error > div').should(
            "have.text",
            "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account."
        );
    });
});