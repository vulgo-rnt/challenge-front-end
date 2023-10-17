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
  padding: 26px 9em 36px 9em;
`;

export default function Banner() {
  return (
    <HeaderStyled>
      <TextStelyd>
        <h1>Breweries</h1>
        <p>A breweries list by Open Brewery DB</p>
      </TextStelyd>
    </HeaderStyled>
  );
}
