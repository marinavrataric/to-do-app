import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { AppContext } from "../../context/AppContext";
import { messageIds } from "../../constants/generalContants";

const { FormattedMessage } = require("react-intl");

const Nav = styled.nav`
  background-color: ${colors.darkBlue};
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
  margin-left: 10px;
`;

const Dropdown = styled.div`
  font-size: 25px;
  color: white;
  margin-right: 10px;
`;

const NavAppTodo = () => {
  const { user } = useContext(AppContext);

  return (
    <Nav>
      <UserName>{user.userName}</UserName>
      <AppTitle><FormattedMessage id={messageIds.title}/></AppTitle>
      <Dropdown>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </Dropdown>
    </Nav>
  );
};

export default NavAppTodo;
