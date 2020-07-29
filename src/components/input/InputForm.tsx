import React, { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 270px;
  font-size: 16px;
`;

interface Props {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props: Props) => {
  return <Input placeholder={props.placeholder} onChange={props.onChange} />;
};

export default InputForm;
