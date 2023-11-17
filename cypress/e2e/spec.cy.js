describe("e2e", () => {
  it("fetch", () => {
    cy.visit("/");
    cy.get("li").should("have.css", "display");
  });
});
