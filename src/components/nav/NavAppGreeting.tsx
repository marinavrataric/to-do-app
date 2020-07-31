import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { messageIds } from "../../constants/generalContants";
import LanguageDropdown from "../dropdown/LanguageDropdown";
import { AppContext } from "../../context/AppContext";
const {FormattedMessage} = require('react-intl')

interface Props {
  theme: string
}

const Nav = styled.nav`
  background-color: ${(props: Props) => props.theme === 'light' ? colors.darkBlue : colors.darkGray};
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

const NavAppGreeting = () => {
  const {theme} = useContext(AppContext)

  return (
    <Nav theme={theme}>
      <AppTitle><FormattedMessage id={messageIds.title}/></AppTitle>
      <LanguageDropdown colored={false}/>
    </Nav>
  );
};

export default NavAppGreeting;
