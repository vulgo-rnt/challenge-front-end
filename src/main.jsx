import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageListSorting from "./components/Pages/PageListSorting/index.jsx";
import PageSingleCard from "./components/Pages/PageSingleCard/index.jsx";
import { PageContextProvider } from "./context/PageContext/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PageListSorting />} />
            <Route path="" element={<PageSingleCard />} />
          </Route>
        </Routes>
      </PageContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
