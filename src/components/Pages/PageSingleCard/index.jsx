import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePageContext } from "../../../context/PageContext";
import Typography from "../../Typography";
import MapFrame from "../../MapFrame";

const DivStyled = styled.div`
  margin: 0 20%;
  padding: 20px;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 710px) {
    margin: 0 10%;
  }
  @media (max-width: 550px) {
    margin: 0;
  }
  button {
    position: relative;
    left: -11px;
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  div {
    margin: 10px 0;
  }
  #map {
    display: flex;
    justify-content: center;
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
    <DivStyled data-testid="pageCard">
      <button onClick={() => navigate(-1)}>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/material-rounded/24/back--v1.png"
          alt="back--v1"
        />
        <Typography>Back</Typography>
      </button>
      <div>
        <br />
        <Typography strong size="xxl">
          {card.name}
        </Typography>
      </div>
      <Typography>Type: {card.brewery_type}</Typography>
      <Typography>Street: {card.street}</Typography>
      <Typography>City: {card.city}</Typography>
      <Typography>State: {card.state}</Typography>
      <Typography>Postal Code: {card.postal_code}</Typography>
      <Typography>Country: {card.country}</Typography>
      <Typography>
        Website:{" "}
        {card.website_url ? (
          <a target="_blank" rel="noreferrer" href={card.website_url}>
            {card.website_url}
          </a>
        ) : (
          "Does not have a website"
        )}
      </Typography>
      <Typography>Phone: {card.phone}</Typography>
      <Typography>
        Open in maps:{" "}
        {card.latitude && card.longitude ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/maps?q=${card.latitude},${card.longitude}`}
          >{`${card.latitude},${card.longitude}`}</a>
        ) : (
          "Not find"
        )}
      </Typography>
      {card.latitude && card.longitude && (
        <div id="map">
          <MapFrame location={[card.latitude, card.longitude]} size="sm" />
        </div>
      )}
    </DivStyled>
  );
}
export default PageSingleCard;
