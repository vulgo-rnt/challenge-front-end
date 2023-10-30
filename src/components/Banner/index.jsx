import styled from "styled-components";

const HeaderStyled = styled.header`
  background: linear-gradient(145deg, #1f191a, #46403f);
`;

const TextStelyd = styled.div`
  font-family: "Noto Naskh Arabic";
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 26px 20% 36px 20%;
`;

export default function Banner() {
  return (
    <HeaderStyled onClick={() => (window.location = "/")}>
      <TextStelyd>
        <h1>Breweries</h1>
        <p>A breweries list by Open Brewery DB</p>
      </TextStelyd>
    </HeaderStyled>
  );
}
