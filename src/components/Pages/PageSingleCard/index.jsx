import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DivStyled = styled.div``;

function PageSingleCard() {
  const cardId = useParams().id;
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${cardId}`)
      .then((data) => data.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <>
      <DivStyled>
        <button onClick={() => navigate(-1)}>Back</button>
      </DivStyled>
    </>
  );
}
export default PageSingleCard;
