import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/AppContext";
import { messageIds } from "../../constants/generalContants";

const { FormattedMessage } = require("react-intl");

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.nav};
  margin: 0;
  padding: 20px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppTitle = styled.h2`
  color: white;
  margin: 0;
  text-align: center;
`;

const UserName = styled.span`
  color: white;
  font-size: 17px;
  margin-left: 30px;
`;

const Dropdown = styled.div`
  font-size: 25px;
  color: white;
  margin-right: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const NavAppTodo = () => {
  const { user, setIsMenuOpen } = useContext(AppContext);

  const openMenu = () => {
    setIsMenuOpen(true)
  };

  return (
    <Nav>
      <UserName>{user.userName}</UserName>
      <AppTitle>
        <FormattedMessage id={messageIds.title} />
      </AppTitle>
      <Dropdown onClick={openMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </Dropdown>
    </Nav>
  );
};

export default NavAppTodo;
