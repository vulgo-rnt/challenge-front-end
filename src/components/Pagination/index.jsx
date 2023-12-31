import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import urlType from "../../common/urlType";

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

export const buttonsSelectCondition = (page) => {
  if (page === "1") return [1, 0, 0];
  else if (page === "2") return [0, 1, 0];
  else return [0, 0, 1];
};

function Pagination() {
  const [lengthData, setLengthData] = useState(0);
  const [buttonSelect, setButtonSelect] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type") || "";
    const page = queryParams.get("page") || "1";

    fetch(`https://api.openbrewerydb.org/v1/breweries/meta?${urlType(type)}`)
      .then((data) => data.json())
      .then((data) => setLengthData(data.total));

    setButtonSelect(buttonsSelectCondition(page));
  }, [location]);

  function elementCount() {
    if (lengthData > 40) {
      const queryParams = new URLSearchParams(location.search);
      const type = queryParams.get("type") || "";
      return (
        <FlexStyled data-testid="pagination">
          <ButtonStyled
            $bgselect={buttonSelect[0]}
            onClick={() => {
              navigate(`?type=${type}&page=1`);
            }}
          >
            1
          </ButtonStyled>
          <ButtonStyled
            $bgselect={buttonSelect[1]}
            onClick={() => {
              navigate(`?type=${type}&page=2`);
            }}
          >
            2
          </ButtonStyled>
          <ButtonStyled
            $bgselect={buttonSelect[2]}
            onClick={() => {
              navigate(`?type=${type}&page=3`);
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
