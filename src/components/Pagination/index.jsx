import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 4px 8px;
  background-color: ${(props) => (props.bgSelect ? "#363636" : "white")};
  color: ${(props) => (props.bgSelect ? "white" : "#363636")};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const FlexStyled = styled.span`
  display: flex;
  gap: 5px;
`;

function Pagination({ type, select, setPag }) {
  const [lengthData, setLengthData] = useState(0);
  const [buttonSelect, setButtonSelect] = useState([true, false, false]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/meta?by_type=${type}`)
      .then((data) => data.json())
      .then((data) => setLengthData(data.total));
  }, [type]);

  function elementCount() {
    if (lengthData > 40) {
      return (
        <FlexStyled>
          <ButtonStyled
            bgSelect={buttonSelect[0]}
            onClick={(event) => {
              setButtonSelect([true, false, false]);
              setPag(event.target.innerText);
            }}
          >
            1
          </ButtonStyled>
          <ButtonStyled
            bgSelect={buttonSelect[1]}
            onClick={(event) => {
              setButtonSelect([false, true, false]);
              setPag(event.target.innerText);
            }}
          >
            2
          </ButtonStyled>
          <ButtonStyled
            bgSelect={buttonSelect[2]}
            onClick={(event) => {
              setButtonSelect([false, false, true]);
              setPag(event.target.innerText);
            }}
          >
            3
          </ButtonStyled>
        </FlexStyled>
      );
    }
  }

  return <>{elementCount()}</>;
}

export default Pagination;
