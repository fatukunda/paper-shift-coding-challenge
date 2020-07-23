describe("Landing page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h6", "Login");
    cy.contains("p", "Your shopping cart is empty");
  });
});
