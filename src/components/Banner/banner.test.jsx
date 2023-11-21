import { fireEvent, render, screen } from "../../../test-utils";
import React from "react";
import Banner from ".";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Banner", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders component", async () => {
    render(<Banner />);
    const bannerElement = await screen.findByTestId("banner");
    expect(bannerElement).toBeInTheDocument();
  });
  it("navigate after click", async () => {
    render(<Banner />);
    const bannerElement = await screen.findByTestId("banner");
    fireEvent.click(bannerElement);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
