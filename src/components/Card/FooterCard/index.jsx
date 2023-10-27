import styled from "styled-components";

const DivStyled = styled.div`
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 6px 12px;
  span {
    font-size: smaller;
    padding: 3px 6px;
    border-radius: 4px;
    background-color: ${(props) => props.$colorCard};
  }
`;

const colorsCard = {
  micro: "#00d1b2",
  brewpub: "#ffdd57",
  regional: "#3273dc",
  contract: "#363636",
  nano: "#23D160",
  large: "#FF3860",
  planning: "#FF7C52",
  bar: "#E28413",
  proprietor: "#5B25B3",
  closed: "#686E76",
};

function FooterCard({ breweryType }) {
  return (
    <DivStyled $colorCard={colorsCard[breweryType]}>
      <span>{breweryType}</span>
    </DivStyled>
  );
}

export default FooterCard;
