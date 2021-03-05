describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");

    cy.get("a").click();
  });
});
