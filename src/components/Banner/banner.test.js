import { fireEvent, render, screen } from "../../../test-utils";
import React from "react";
import infoMock from "../__mocks__/api/response";
import Banner from ".";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
    jest.restoreAllMocks();
  });

  it("renders component", async () => {
    render(<Banner />);
    const linkElement = await screen.findByTestId("banner");
    expect(linkElement).toBeInTheDocument();
  });
  it("navigate after click", async () => {
    render(<Banner />);
    const linkElement = await screen.findByTestId("banner");
    fireEvent.click(linkElement);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
