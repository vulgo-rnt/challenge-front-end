import styled from "styled-components";

const textSizes = {
  sm: "12px",
  l: "24px",
  xxl: "42px",
};

const ParagStyled = styled.p`
  font-weight: ${(props) => (props.strong ? "bold" : "none")};
  font-size: ${(props) => textSizes[props.size]};
  color: #363636;
`;

function Typography({ size, strong = false, children }) {
  return (
    <ParagStyled strong={strong} size={size}>
      {children}
    </ParagStyled>
  );
}

export default Typography;
