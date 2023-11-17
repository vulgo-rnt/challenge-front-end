import { BrowserRouter } from "react-router-dom";
import { PageContextProvider } from "../../src/context/PageContext";
import { mount } from "cypress/react18";

export const customMount = (children) => {
  mount(
    <BrowserRouter>
      <PageContextProvider>{children}</PageContextProvider>
    </BrowserRouter>
  );
};
