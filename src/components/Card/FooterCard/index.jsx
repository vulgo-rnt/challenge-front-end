import styled from "styled-components";

const DivStyled = styled.div`
  box-sizing: border-box;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 6px 12px;
  span {
    font-size: 8px;
    padding: 3px 6px;
    border-radius: 4px;
    background-color: ${(props) => props.$colorCard};
    color: ${(props) => props.$fontColor};
  }
`;
const colorsCard = {
  micro: { bg: "#00d1b2", font: "white" },
  brewpub: { bg: "#ffdd57", font: "black" },
  regional: { bg: "#3273dc", font: "white" },
  contract: { bg: "#363636", font: "white" },
  nano: { bg: "#23D160", font: "black" },
  large: { bg: "#FF3860", font: "white" },
  planning: { bg: "#FF7C52", font: "white" },
  bar: { bg: "#E28413", font: "white" },
  proprietor: { bg: "#5B25B3", font: "white" },
  closed: { bg: "#686E76", font: "white" },
};

function FooterCard({ breweryType }) {
  return (
    <DivStyled
      $colorCard={colorsCard[breweryType].bg}
      $fontColor={colorsCard[breweryType].font}
    >
      <span>{breweryType}</span>
    </DivStyled>
  );
}

export default FooterCard;
