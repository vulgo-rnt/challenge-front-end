import { render, screen } from "../../../../test-utils";
import React from "react";
import infoMock from "../../__mocks__/api/response";
import FooterCard, { colorsCard } from ".";

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

  it("renders component", async () => {
    render(<FooterCard breweryType={infoMock[0].brewery_type} />);
    const linkElement = await screen.findByTestId("footerCard");
    expect(linkElement).toBeInTheDocument();
  });
  it("render color", async () => {
    render(<FooterCard breweryType={infoMock[0].brewery_type} />);
    const linkElement = await screen.findByTestId("footerCard/element");
    expect(linkElement).toHaveStyle(
      `background-color:${colorsCard[infoMock[0].brewery_type].bg}`
    );
  });
});
