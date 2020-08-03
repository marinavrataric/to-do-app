import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";

interface Props {
  buttonWidth?: string;
  buttonName?: string;
  onClick: () => void;
}

const Button = styled.button`
  margin: 20px 0 40px 0;
  padding: 10px;
  border: none;
  border-radius: 17px;
  background-color: ${colors.blue};
  width: ${(props: Props) => props.buttonWidth ? props.buttonWidth : '300px'};
  font-size: 17px;
  color: white;
  &:hover {
    background-color: ${colors.hoverBlue};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonForm = (props: Props) => {
  return (
    <Button onClick={props.onClick} buttonWidth={props.buttonWidth}>
      {props.buttonName}
    </Button>
  );
};

export default ButtonForm;
