import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { AppContext } from "../../context/AppContext";

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

`;

const NavAppTodo = () => {
  const { user } = useContext(AppContext);

  return (
    <Nav>
      <UserName>{user.userName} Marina</UserName>
      <AppTitle>TO-DO List App</AppTitle>
      <Dropdown>text123</Dropdown>
    </Nav>
  );
};

export default NavAppTodo;
