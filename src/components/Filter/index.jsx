import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Typography from "../Typography";

const LabelStyled = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SelectStyled = styled.select`
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  background: url("https://img.icons8.com/color/10/expand-arrow.png") no-repeat
    right center;
  background-position: calc(100% - 7px) center;
  font-size: 10px;
  padding: 6px 20px 6px 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  &:focus {
    outline: none;
    border-color: initial;
  }
`;

const selectOptions = [
  "micro",
  "nano",
  "regional",
  "brewpub",
  "large",
  "planning",
  "bar",
  "contract",
  "proprietor",
  "closed",
];

function Filter() {
  const navigate = useNavigate();

  return (
    <LabelStyled data-testid="filter">
      <Typography size="sm" strong>
        Filter:
      </Typography>
      <SelectStyled
        data-testid="filter/select"
        onChange={(event) => navigate(`?type=${event.target.value}&page=1`)}
      >
        {selectOptions.map((option) => (
          <option data-testid={`option/${option}`} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
    </LabelStyled>
  );
}

export default Filter;
