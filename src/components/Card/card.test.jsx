import Card from ".";
import { render, screen } from "../../../test-utils";
import React from "react";

const infoMock = {
  id: "Test",
  name: "Test",
  address_1: "Test",
  city: "Test",
  state: "Test",
  postal_code: "Test",
  country: "Test",
  brewery_type: "micro",
};

describe("Card", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([infoMock]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders Card component", async () => {
    render(<Card info={infoMock} />);
    const linkElement = await screen.findByRole("listitem");
    expect(linkElement).toHaveStyle("display:flex");
  });
});
