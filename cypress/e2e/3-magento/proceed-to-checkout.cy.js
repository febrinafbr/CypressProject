describe("Proceed to checkout", () => {
    beforeEach(() => {
        cy.visit(Cypress.config("baseUrl"));
        cy.login("doni11@gmail.com","Doni-123");
        cy.wait(3000);
        cy.get('.showcart').click();
        cy.get("#top-cart-btn-checkout").click();
        cy.wait(1000);
    });
    it("Failed proceed to checkout - empty street", () => {
        cy.get('input[name="company"').type("ABC Company");
        cy.get('input[name="city"').type("Jakarta Timur");
        cy.get('input[name="postcode"').type("13710");
        cy.get('select[name="country_id"').select('ID').should('have.value', 'ID');
        cy.get('input[name="telephone').type("0812918292010");
        cy.wait(3000);
        cy.get('.button > span').click();
        cy.get('[data-bind="text: element.error"]').should(
            "have.text",
            "This is a required field."
        );
    });
    it("Success proceed to checkout", () => {
        cy.get('input[name="company"').type("ABC Company");
        cy.get('input[name="street[0]"').type("Apple Street");
        cy.get('input[name="city"').type("Jakarta Timur");
        cy.get('input[name="postcode"').type("13710");
        cy.get('select[name="country_id"').select('ID').should('have.value', 'ID');
        cy.get('input[name="telephone').type("0812918292010");
        cy.wait(3000);
        cy.get('.button').click();
        cy.wait(1000);
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click();
        cy.get('.base').should(
            "have.text",
            "Thank you for your purchase!"
        );
    });
});