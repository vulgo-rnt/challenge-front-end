import Card from "../../src/components/Card";

describe("Render Card", () => {
  beforeEach(() => {
    cy.fixture("api-response").as("infoMock");
  });

  it("render css in Card", async () => {
    const infoMock = await cy.get("@infoMock");
    cy.mount(<Card info={infoMock}></Card>);
    cy.get("li").should("have.css", "display");
  });
});
