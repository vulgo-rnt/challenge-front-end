import styled from "styled-components";
import FooterCard from "./FooterCard";
import Typography from "../Typography";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 23%;
  height: 225px;
  margin: auto;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
`;

function Card({ info }) {
  return (
    <CardStyled>
      <div>
        <Typography size="l">{info.title}</Typography>
        <br />
        <div>
          <Typography size="sm">{info.address}</Typography>
          <Typography size="sm">{`${info.city} ${info.state} - ${info.postalCode}`}</Typography>
          <Typography size="sm">{info.country}</Typography>
        </div>
      </div>

      <FooterCard breweryType={info.breweryType} />
    </CardStyled>
  );
}

export default Card;
