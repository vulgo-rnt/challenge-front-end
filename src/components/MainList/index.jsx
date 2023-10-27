import { useEffect, useState } from "react";
import Card from "../Card";
import Filter from "../Filter";
import styled from "styled-components";
import Pagination from "../Pagination";

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 65vw;
  gap: 10px;
  margin: auto;
  padding: 0;
`;

const MainStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  label {
    position: absolute;
    top: -40px;
    left: 15%;
  }
`;

export default function MainList() {
  const [type, setType] = useState("");
  const [cardData, setCardData] = useState([]);
  const [page, setPage] = useState("1");

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/v1/breweries?${type}&page=${page}&per_page=20`
    )
      .then((data) => data.json())
      .then((data) => setCardData(data));
  }, [type, page]);

  return (
    <MainStyled>
      <Filter
        setType={(param) => {
          setPage("1");
          setType(`by_type=${param}`);
        }}
      />
      <ListStyled>
        {cardData.length > 0 &&
          cardData.map((card, index) => {
            const info = {
              title: card.name,
              address: card["address_1"],
              country: card.country,
              postalCode: card["postal_code"],
              state: card.state,
              breweryType: card["brewery_type"],
              city: card.city,
            };
            return <Card key={index} info={info} />;
          })}
      </ListStyled>
      <Pagination type={type} setPag={setPage} page={page} />
    </MainStyled>
  );
}
