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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
`;

function Card({ info }) {
  return (
    <CardStyled onClick={() => (window.location = `/find/${info.id}`)}>
      <div>
        <Typography size="l" strong>
          {info.name}
        </Typography>
        <br />
        <div>
          <Typography size="sm">{info.address_1}</Typography>
          <Typography size="sm">{`${info.city} ${info.state} - ${info.postal_code}`}</Typography>
          <Typography size="sm">{info.country}</Typography>
        </div>
      </div>

      <FooterCard breweryType={info.brewery_type} />
    </CardStyled>
  );
}

export default Card;
