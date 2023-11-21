import { render, screen } from "../../../test-utils";
import React from "react";
import Footer from ".";

describe("Footer", () => {
  it("renders component", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
