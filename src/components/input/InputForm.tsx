import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";

const Input = styled.input`
  padding: 10px;
  width: 270px;
  font-size: 16px;
  border-radius: 17px;
  border: 2px
    ${(props: Props) =>
      props.theme === "light" ? colors.blue : colors.white}
    solid;
  &:focus {
    outline: none;
  }
`;

interface Props {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  theme?: string;
}

const InputForm = (props: Props) => { 
  return (
    <Input
      value={props.value || ""}
      placeholder={props.placeholder}
      onChange={props.onChange}
      theme={props.theme}
    />
  );
};

export default InputForm;
