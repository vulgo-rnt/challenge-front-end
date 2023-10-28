import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [card, setCard] = useState({});
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type") || "";
    const page = queryParams.get("page") || "1";

    fetch(
      `https://api.openbrewerydb.org/v1/breweries?${
        type && `by_type=${type}`
      }&page=${page}&per_page=20`
    )
      .then((data) => data.json())
      .then((data) => setCardsData(data));
  }, [location]);

  const context = {
    cardsData,
    setCardsData,
    card,
    setCard,
  };

  return (
    <PageContext.Provider value={context}>{children}</PageContext.Provider>
  );
}

export const usePageContext = () => {
  return useContext(PageContext);
};
