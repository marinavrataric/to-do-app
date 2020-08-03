import React, { useContext, ChangeEvent } from "react";
import { AppContext } from "../../context/AppContext";
import { languages } from "../../constants/generalContants";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";

interface SelectProps {
  colored: boolean
}

const Select = styled.select`
  padding: 7px 15px;
  font-size: 15px;
  margin-right: 15px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }

  background-color: ${(props: SelectProps) => props.colored && colors.blue };
  border: ${(props: SelectProps) => props.colored && 'none'};
  color: ${(props: SelectProps) => props.colored && colors.white };
  width: ${(props: SelectProps) => props.colored && '80px'};
`;

const LanguageDropdown = ({colored}: SelectProps) => {
  const { locale, setLocale } = useContext(AppContext);

  const languageDropdown = languages.map((language: string, index: number) => {
    return (
      <option value={language} key={index}>
        {language}
      </option>
    );
  });

  const chooseLanguage = (e: ChangeEvent<HTMLSelectElement>) =>
    setLocale(e.target.value);
    
  return (
    <Select value={locale} onChange={chooseLanguage} colored={colored}>
      {languageDropdown}
    </Select>
  );
};

export default LanguageDropdown;
