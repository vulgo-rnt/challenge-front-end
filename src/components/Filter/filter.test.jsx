import { fireEvent, render, screen } from "../../../test-utils";
import React from "react";
import Filter from ".";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Filter", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders component", () => {
    render(<Filter />);
    const filterElement = screen.getByTestId("filter");
    expect(filterElement).toBeInTheDocument();
  });
  it("navigate after select", () => {
    render(<Filter />);
    const filterElement = screen.getByTestId("filter/select");

    fireEvent.change(filterElement, { target: { value: "micro" } });

    const optionElement = screen.getByTestId("option/micro");

    expect(mockNavigate).toHaveBeenCalledWith(
      `?type=${optionElement.value}&page=1`
    );
  });
});
