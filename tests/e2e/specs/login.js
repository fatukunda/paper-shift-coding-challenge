describe("Login", () => {
  it("Open login modal", () => {
    cy.visit("/");
    cy.get(".logout").click();
  });

  it("Login user", () => {
    cy.visit("/");
    cy.get(".logout").click();
    cy.get('input[type="email"]').type("email@email.com");
    cy.get('input[type="password"]').type("123456");
    cy.get('button[type="submit"]').click();
    cy.get(".logout")
      .contains("Logout")
      .wait(2000);
  });
});
