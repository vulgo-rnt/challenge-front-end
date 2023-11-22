import React from "react";
import Pagination, { buttonsSelectCondition } from ".";
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
    jest.restoreAllMocks();
    global.fetch = originalFetch;
    responseFecth = 60;
  });

  it("renders component", async () => {
    await act(async () => {
      render(<Pagination />);
    });
    const paginationElement = screen.getByTestId("pagination");
    const buttonsElements = screen.getAllByRole("button");

    expect(buttonsElements).toHaveLength(3);
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

    for (let i = 1; i <= 3; i++) {
      const paginationElement = screen.getByTestId("pagination");

      fireEvent.click(paginationElement.children[i - 1]);

      expect(mockNavigate).toHaveBeenCalledWith(`?type=&page=${i}`);
    }
  });
  it("renders buttons with select", async () => {
    await act(async () => {
      render(<Pagination />, { inicialEntries: "/?page=1" });
    });
    const buttonSelectElement = screen.getByTestId("pagination").firstChild;

    expect(buttonSelectElement).toHaveStyle("background-color:#363636");

    let uptadeFn = buttonsSelectCondition("2");
    expect(uptadeFn).toEqual([0, 1, 0]);
    uptadeFn = buttonsSelectCondition("3");
    expect(uptadeFn).toEqual([0, 0, 1]);
  });
});
