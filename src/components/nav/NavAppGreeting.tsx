import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { languages } from "../../constants/generalContants";

const Nav = styled.nav`
  background-color: ${colors.darkBlue};
  margin: 0;
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const AppTitle = styled.h2`
  color: white;
  margin: 0;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

const Select = styled.select`
  padding: 7px 15px;
  font-size: 15px;
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
