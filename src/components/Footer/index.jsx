import styled from "styled-components";
import Typography from "../Typography";

const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

function Footer() {
  return (
    <TitleStyled>
      <Typography strong>Breweries List</Typography>
    </TitleStyled>
  );
}

export default Footer;
