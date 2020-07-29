import React from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 17px;
  background-color: ${colors.blue};
  width: 300px;
  font-size: 17px;
  color: white;
  margin: 20px 0;
`;

interface Props {
  buttonName: string;
  onClick: () => void
}

const ButtonForm = (props: Props) => {
  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
};

export default ButtonForm;
