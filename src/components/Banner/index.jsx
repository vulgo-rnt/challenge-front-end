import styled from "styled-components";
import Typography from "../Typography";
import { useNavigate } from "react-router-dom";

const HeaderStyled = styled.header`
  background: linear-gradient(145deg, #1f191a, #46403f);
`;

const TextStelyd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 26px 14.7% 36px 14.7%;
`;

export default function Banner() {
  const navigate = useNavigate();
  return (
    <HeaderStyled data-testid="banner" onClick={() => navigate("/")}>
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
