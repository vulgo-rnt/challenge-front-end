import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 6px 10px;
  background-color: ${(props) => (props.$bgselect ? "#363636" : "white")};
  color: ${(props) => (props.$bgselect ? "white" : "#363636")};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const FlexStyled = styled.span`
  display: flex;
  gap: 5px;
  margin: 8px;
`;

function Pagination({ type, page, setPag }) {
  const [lengthData, setLengthData] = useState(0);
  const [buttonSelect, setButtonSelect] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/meta?${type}`)
      .then((data) => data.json())
      .then((data) => setLengthData(data.total));

    if (page === "1") setButtonSelect([1, 0, 0]);
    else if (page === "2") setButtonSelect([0, 1, 0]);
    else setButtonSelect([0, 0, 1]);
  }, [type]);

  function elementCount() {
    if (lengthData > 40) {
      return (
        <FlexStyled>
          <ButtonStyled
            $bgselect={buttonSelect[0]}
            onClick={(event) => {
              setButtonSelect([1, 0, 0]);
              setPag(event.target.innerText);
            }}
          >
            1
          </ButtonStyled>
          <ButtonStyled
            $bgselect={buttonSelect[1]}
            onClick={(event) => {
              setButtonSelect([0, 1, 0]);
              setPag(event.target.innerText);
            }}
          >
            2
          </ButtonStyled>
          <ButtonStyled
            $bgselect={buttonSelect[2]}
            onClick={(event) => {
              setButtonSelect([0, 0, 1]);
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
