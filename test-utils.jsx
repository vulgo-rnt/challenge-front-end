import { BrowserRouter } from "react-router-dom";
import { PageContextProvider } from "./src/context/PageContext";
import { render } from "@testing-library/react";

const Routers = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

const Provider = ({ children }) => (
  <BrowserRouter>
    <PageContextProvider>{children}</PageContextProvider>
  </BrowserRouter>
);

export const renderWithRouters = (ui, options) =>
  render(ui, {
    wrapper: Routers,
    ...options,
  });

export const renderWithProvider = (ui, options) =>
  render(ui, {
    wrapper: Provider,
    ...options,
  });

export * from "@testing-library/react";
export { renderWithRouters as render };
