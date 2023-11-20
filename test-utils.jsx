import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PageContextProvider } from "./src/context/PageContext";
import { render } from "@testing-library/react";

const Provider = ({ children }) => (
  <BrowserRouter>
    <PageContextProvider>{children}</PageContextProvider>
  </BrowserRouter>
);

export const renderWithProvider = (ui, options) =>
  render(ui, {
    wrapper: Provider,
    ...options,
  });

export * from "@testing-library/react";
export { renderWithProvider as render };
