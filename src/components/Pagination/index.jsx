import { useEffect, useState } from "react";
import styled from "styled-components";

const SomeOtherComponent = (props) => <button {...props} />;

const ButtonStyled = styled(SomeOtherComponent)`
  padding: 4px 8px;
  background-color: ${(props) => (props.bgselect ? "#363636" : "white")};
  color: ${(props) => (props.bgselect ? "white" : "#363636")};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const FlexStyled = styled.span`
  display: flex;
  gap: 5px;
`;

function Pagination({ type, select, setPag }) {
  const [lengthData, setLengthData] = useState(0);
  const [buttonSelect, setButtonSelect] = useState([1, 0, 0]);

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
            bgselect={buttonSelect[0]}
            onClick={(event) => {
              setButtonSelect([1, 0, 0]);
              setPag(event.target.innerText);
            }}
          >
            1
          </ButtonStyled>
          <ButtonStyled
            bgselect={buttonSelect[1]}
            onClick={(event) => {
              setButtonSelect([0, 1, 0]);
              setPag(event.target.innerText);
            }}
          >
            2
          </ButtonStyled>
          <ButtonStyled
            bgselect={buttonSelect[2]}
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
