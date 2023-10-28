import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { usePageContext } from "../../../context/PageContext";
import Typography from "../../Typography";

const DivStyled = styled.div``;

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
        <button onClick={() => navigate(-1)}>Back</button>
        <div>
          <Typography size="l">{card.name}</Typography>
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
