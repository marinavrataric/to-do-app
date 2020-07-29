import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { languages } from "../../constants/generalContants";

const Nav = styled.nav`
  background-color: ${colors.darkBlue};
  margin: 0;
  padding: 20px 0;
`;

const AppTitle = styled.h2`
  color: white;
  margin: 0;
  display: inline-block;
  text-align: center;
  margin-left: 45%;
`;

const Select = styled.select`
  padding: 7px 15px;
  font-size: 15px;
  float: right;
  margin-right: 15px;
`;

const NavAppGreeting = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languageDropdown = languages.map((language: string, index: number) => {
    return (
      <option value={language} key={index}>
        {language}
      </option>
    );
  });

  const chooseLanguage = (e: ChangeEvent<HTMLSelectElement>) =>
    setSelectedLanguage(e.target.value);

  return (
    <Nav>
      <AppTitle>TO-DO List App</AppTitle>
      <Select value={selectedLanguage} onChange={chooseLanguage}>
        {languageDropdown}
      </Select>
    </Nav>
  );
};

export default NavAppGreeting;
