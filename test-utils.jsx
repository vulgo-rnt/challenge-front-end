import { MemoryRouter } from "react-router-dom";
import { PageContextProvider } from "./src/context/PageContext";
import { render } from "@testing-library/react";

let route = "/";

const Routers = ({ children }) => (
  <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
);

const Provider = ({ children }) => (
  <MemoryRouter>
    <PageContextProvider>{children}</PageContextProvider>
  </MemoryRouter>
);

export const renderWithRouters = (ui, options) => {
  if (options) route = options.inicialEntries;
  render(ui, {
    wrapper: Routers,
    ...options,
  });
};

export const renderWithProvider = (ui, options) =>
  render(ui, {
    wrapper: Provider,
    ...options,
  });

export * from "@testing-library/react";
export { renderWithRouters as render };
