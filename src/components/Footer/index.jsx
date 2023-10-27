import styled from "styled-components";

const TitleStyled = styled.p`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

function Footer() {
  return (
    <TitleStyled>
      <strong>Breweries List</strong>
    </TitleStyled>
  );
}

export default Footer;
