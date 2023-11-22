import React from "react";
import { renderWithProvider, screen } from "../../../../test-utils";
import PageListSorting from ".";
import { act } from "react-test-renderer";
import mockResponse from "../../__mocks__/api/response";

describe("Page Index", () => {
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });
  it("renders component", async () => {
    await act(async () => {
      renderWithProvider(<PageListSorting />);
    });
    const pageElement = screen.getByTestId("page");
    expect(pageElement).toBeInTheDocument();
  });
  it("renders list items with 20 elements", async () => {
    await act(async () => {
      renderWithProvider(<PageListSorting />);
    });
    const listItemsElements = await screen.findAllByTestId("card");
    expect(listItemsElements).toHaveLength(20);
  });
});
