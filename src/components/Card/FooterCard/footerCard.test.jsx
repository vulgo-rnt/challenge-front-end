import { render, screen } from "../../../../test-utils";
import React from "react";
import infoMock from "../../__mocks__/api/response";
import FooterCard, { colorsCard } from ".";

describe("Footer Card", () => {
  it("renders component", () => {
    render(<FooterCard breweryType={infoMock[0].brewery_type} />);
    const footerElement = screen.getByTestId("footerCard");
    expect(footerElement).toBeInTheDocument();
  });
  it("render color", () => {
    render(<FooterCard breweryType={infoMock[0].brewery_type} />);
    const footerElement = screen.getByTestId("footerCard/element");
    expect(footerElement).toHaveStyle(
      `background-color:${colorsCard[infoMock[0].brewery_type].bg}`
    );
  });
});
