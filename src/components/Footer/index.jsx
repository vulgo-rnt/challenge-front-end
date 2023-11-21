import styled from "styled-components";
import Typography from "../Typography";

const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

function Footer() {
  return (
    <TitleStyled data-testid="footer">
      <Typography strong>Breweries List</Typography>
    </TitleStyled>
  );
}

export default Footer;
