describe("Choose Products", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
        cy.login("doni11@gmail.com","Doni-123");
        cy.wait(1000);
        cy.get("#ui-id-6 > :nth-child(2)").click();
        cy.wait(1000);
        cy.get('dd > .items > :nth-child(1) > a').click();
    });
    it("Choose product 1", () => {
        cy.contains('a', 'Push It Messenger Bag').click();
        cy.get("#product-addtocart-button").click();
        cy.wait(1000);
        cy.get('.counter-number').should(
            "have.text",
            "1"
        );
    });
    it("Choose product 2", () => {
        cy.contains('a', 'Overnight Duffle').click();
        cy.get("#product-addtocart-button").click();
        cy.wait(1000);
        cy.get('.counter-number').should(
            "have.text",
            "2"
        );
    });
});