import Card from "../../Card";
import Filter from "../../Filter";
import styled from "styled-components";
import Pagination from "../../Pagination";
import { usePageContext } from "../../../context/PageContext";

const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 65vw;
  gap: 10px;
  margin: auto;
  margin-top: 20px;
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

export default function PageListSorting() {
  const { cardsData } = usePageContext();

  return (
    <MainStyled>
      <Filter />
      <ListStyled>
        {!!cardsData &&
          cardsData.map((card, index) => {
            const info = { ...card };
            return <Card key={index} info={info} />;
          })}
      </ListStyled>
      <Pagination />
    </MainStyled>
  );
}
