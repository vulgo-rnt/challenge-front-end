import { render, screen } from "@testing-library/react";
import React from "react";
import Typography from ".";

describe("Typography", () => {
  it("renders component", () => {
    render(<Typography size="sm" />);
    const typography = screen.getByTestId("typography");
    expect(typography).toBeInTheDocument();
  });
  it("css renders", () => {
    render(<Typography size="sm" strong color="black" />);
    const typography = screen.getByTestId("typography");
    expect(typography).toHaveStyle("font-size: 12px");
    expect(typography).toHaveStyle("color: black");
    expect(typography).toHaveStyle("font-weight: bold");
  });
});
