import { fireEvent, render, screen } from "../../../test-utils";
import React from "react";
import infoMock from "../__mocks__/api/response";
import Filter from ".";

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
    render(<Filter />);
    const filterElement = await screen.findByTestId("filter");
    expect(filterElement).toBeInTheDocument();
  });
  it("navigate after select", async () => {
    render(<Filter />);
    const filterElement = await screen.findByTestId("filter/select");

    fireEvent.change(filterElement, { target: { value: "micro" } });

    const optionElement = await screen.findByTestId("option/micro");

    expect(mockNavigate).toHaveBeenCalledWith(
      `?type=${optionElement.value}&page=1`
    );
  });
});
