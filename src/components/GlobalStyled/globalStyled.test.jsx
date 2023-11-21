import React from "react";
import GlobalStyled from ".";
import { render, screen } from "../../../test-utils";

describe("Global Styles", () => {
  it("css GlobalStyled", () => {
    render(<GlobalStyled />);
    expect(document.body).toHaveStyle("margin: 0 25px");
    expect(document.body).toHaveStyle('font-family: "Domine"');
  });
});
