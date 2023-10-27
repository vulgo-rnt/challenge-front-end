import styled from "styled-components";
import FooterCard from "./FooterCard";
import Typography from "../Typography";

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

function Card({ info }) {
  return (
    <CardStyled>
      <Typography size="l">{info.title}</Typography>
      <div>
        <Typography size="sm">{info.address}</Typography>
        <Typography size="sm">{`${info.city} ${info.state} - ${info.postalCode}`}</Typography>
        <Typography size="sm">{info.country}</Typography>
      </div>
      <FooterCard breweryType={info.breweryType} />
    </CardStyled>
  );
}

export default Card;
