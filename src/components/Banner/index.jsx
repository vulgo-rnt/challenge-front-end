import styled from "styled-components";
import Typography from "../Typography";

const HeaderStyled = styled.header`
  background: linear-gradient(145deg, #1f191a, #46403f);
`;

const TextStelyd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 26px 20% 36px 20%;
`;

export default function Banner() {
  return (
    <HeaderStyled onClick={() => (window.location = "/")}>
      <TextStelyd>
        <Typography color="white" size="l">
          Breweries
        </Typography>
        <Typography color="#ffffffca">
          A breweries list by Open Brewery DB
        </Typography>
      </TextStelyd>
    </HeaderStyled>
  );
}
