describe("Add to cart", () => {
  it("add one item to cart", () => {
    cy.visit("/")
      .wait(2000)
      .get("button")
      .contains("Add to Cart")
      .click();
    cy.wait(2000)
      .get("span.trash-all")
      .contains("Remove all");
  });
});
