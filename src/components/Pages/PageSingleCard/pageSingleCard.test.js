import React from "react";
import mockResponse from "../../__mocks__/api/response";
import { fireEvent, renderWithProvider, screen } from "../../../../test-utils";
import PageSingleCard from ".";
import { act } from "react-test-renderer";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Page Single Card", () => {
  let originalFetch;
  let mock = mockResponse[0];
  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mock),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    global.fetch = originalFetch;
  });
  it("renders component", async () => {
    await act(async () => {
      renderWithProvider(<PageSingleCard />);
    });
    const pageElement = screen.getByTestId("pageCard");
    expect(pageElement).toBeInTheDocument();
  });
  it("text 'not find' if response api return trash data", async () => {
    mock = { ...mock, website_url: null, latitude: null };

    await act(async () => {
      renderWithProvider(<PageSingleCard />);
    });
    const websiteTextElement = screen.getByText(
      "Website: Does not have a website"
    );
    const locationTextElement = screen.getByText("Open in maps: Not find");

    expect(websiteTextElement).toBeInTheDocument();
    expect(locationTextElement).toBeInTheDocument();
  });
  it("navigate after click", async () => {
    await act(async () => {
      renderWithProvider(<PageSingleCard />);
    });
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
