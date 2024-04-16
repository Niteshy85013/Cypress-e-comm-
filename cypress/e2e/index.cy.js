describe("Test practice", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it.only("Navbar Content Testing", () => {
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.url().should("include", "/products");
    cy.wait(2000);
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.url().should("include", "/view_cart");
    cy.wait(2000);
    cy.get(":nth-child(4) > a").click();
    cy.url().should("include", "/login");
    cy.wait(2000);
    cy.get(":nth-child(5) > a").click();
    cy.url().should("include", "/test_cases");
    cy.wait(2000);
    cy.get(".shop-menu > .nav > :nth-child(6) > a").click();
    cy.url().should("include", "/api_list");
  });
});
