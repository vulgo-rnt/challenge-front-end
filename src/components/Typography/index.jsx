import styled from "styled-components";

const textSizes = {
  sm: "12px",
  l: "24px",
};

const ParagStyled = styled.p`
  font-size: ${(props) => textSizes[props.size]};
  color: #363636;
`;

function Typography({ size, strong, children }) {
  return <ParagStyled size={size}>{children}</ParagStyled>;
}

export default Typography;
