import React from "react";
import Pagination from ".";
import { fireEvent, render, screen } from "../../../test-utils";
import { act } from "react-test-renderer";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Pagination", () => {
  let originalFetch;
  let responseFecth = 60;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ total: responseFecth }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
    responseFecth = 60;
  });

  it("renders component", async () => {
    await act(async () => {
      render(<Pagination />);
    });
    const paginationElement = await screen.findByTestId("pagination");
    expect(paginationElement).toBeInTheDocument();
  });

  it("not renders if response api for < 40", async () => {
    responseFecth = 0;
    await act(async () => {
      render(<Pagination />);
    });
    const paginationElement = screen.queryByTestId("pagination");
    expect(paginationElement).toBe(null);
  });
  it("navigate after click", async () => {
    await act(async () => {
      render(<Pagination />);
    });

    const paginationElement = await screen.findByTestId("pagination");

    await act(async () => {
      fireEvent.click(paginationElement.firstChild);
    });

    expect(mockNavigate).toHaveBeenCalledWith("?type=&page=1");
  });
});
