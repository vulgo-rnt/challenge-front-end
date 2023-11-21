import Card from ".";
import { fireEvent, render, screen } from "../../../test-utils";
import React from "react";
import infoMock from "../__mocks__/api/response";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Card", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders component", async () => {
    render(<Card info={infoMock[0]} />);
    const cardElement = await screen.findByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });
  it("navigate after click", async () => {
    render(<Card info={infoMock[0]} />);
    const cardElement = await screen.findByTestId("card");
    fireEvent.click(cardElement);

    expect(mockNavigate).toHaveBeenCalledWith(`/find/${infoMock[0].id}`);
  });
});
