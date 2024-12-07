describe("Edit Account", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
        cy.login("doni15@gmail.com","Doni-123");
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.contains('a', 'My Account').click();
    });
    it("Success edit", () => {
        cy.contains('a span', 'Edit').click();
        cy.get("#lastname").clear();
        cy.get("#lastname").type("Irawan");
        cy.contains('button', 'Save').click();
    });
    it("Failed edit - empty lastname", () => {
        cy.contains('a span', 'Edit').click();
        cy.get("#lastname").clear();
        cy.contains('button', 'Save').click();
        cy.get("#lastname-error").should(
            "have.text",
            "This is a required field."
        );
    });
});