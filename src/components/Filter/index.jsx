import styled from "styled-components";

const LabelStyled = styled.label`
  font-size: large;
  font-weight: bold;
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
  color: black;

  &:after {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: blue;
  }
  padding: 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

function Filter({ setType }) {
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
  return (
    <>
      <LabelStyled>
        Filter:
        <SelectStyled onChange={(event) => setType(event.target.value)}>
          {selectOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </SelectStyled>
      </LabelStyled>
    </>
  );
}

export default Filter;
