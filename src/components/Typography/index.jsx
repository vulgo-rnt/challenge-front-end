import styled from "styled-components";

const textSizes = {
  sm: "12px",
  l: "24px",
  xxl: "42px",
};

const ParagStyled = styled.p`
  font-weight: ${(props) => (props.$strong ? "bold" : "none")};
  font-size: ${(props) => textSizes[props.size]};
  color: ${(props) => props.color};
`;

function Typography({ size, strong = false, children, color = "#363636" }) {
  return (
    <ParagStyled $strong={strong} size={size} color={color}>
      {children}
    </ParagStyled>
  );
}

export default Typography;
