import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePageContext } from "../../../context/PageContext";
import Typography from "../../Typography";

const DivStyled = styled.div`
  margin: 0 20%;
  padding: 20px;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.1);
  button {
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    span {
      margin: auto;
    }
  }
  div {
    font-size: small;
  }
`;

function PageSingleCard() {
  const cardId = useParams().id;
  const navigate = useNavigate();
  const { card, setCard } = usePageContext();

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${cardId}`)
      .then((data) => data.json())
      .then((data) => setCard(data));
  }, []);

  return (
    <>
      <DivStyled>
        <button onClick={() => navigate(-1)}>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/back--v1.png"
            alt="back--v1"
          />
          <span>Back</span>
        </button>
        <Typography strong size="xxl">
          {card.name}
        </Typography>
        <div>
          <p>Type: {card.brewery_type}</p>
          <p>Street: {card.street}</p>
          <p>City: {card.city}</p>
          <p>State: {card.state}</p>
          <p>Postal Code: {card.postal_code}</p>
          <p>Country: {card.country}</p>
          <p>
            Website:{" "}
            {card.website_url ? (
              <a target="_blank" href={card.website_url}>
                {card.website_url}
              </a>
            ) : (
              "Does not have a website"
            )}
          </p>
          <p>Phone: {card.phone}</p>
          <p>
            Open in maps:{" "}
            <a
              target="_blank"
              href={`https://www.google.com/maps?q=${card.latitude},${card.longitude}`}
            >{`${card.latitude},${card.longitude}`}</a>
          </p>
        </div>
      </DivStyled>
    </>
  );
}
export default PageSingleCard;
