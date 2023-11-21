import { render, screen } from "../../../test-utils";
import React from "react";
import Footer from ".";

describe("Footer", () => {
  it("renders component", async () => {
    render(<Footer />);
    const footerElement = await screen.findByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
