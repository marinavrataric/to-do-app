import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { UserInterface } from "../../constants/UserInterface";
import { AppContext } from "../../context/AppContext";

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
  margin-left: 35%;
`;

const UserName = styled.h2`
  color: white;
  font-size: 17px;
  float: left;
  margin-left: 10px;
`;

const NavAppTodo = () => {
  const {user} = useContext(AppContext)

  return (
    <Nav>
      <AppTitle>TO-DO List App</AppTitle>
      <UserName>{user.userName}</UserName>
    </Nav>
  );
};

export default NavAppTodo;
