import React, { ChangeEvent, useContext, useEffect } from "react";
import styled from "styled-components";
import InputForm from "../../components/input/InputForm";
import ButtonForm from "../../components/button/ButtonForm";
import { AppContext } from "../../context/AppContext";
import { useHistory } from 'react-router-dom';
import { route } from "../../constants/generalContants";
import { CenterDiv } from "../../constants/styleConstants";

const Title = styled.h2`
  font-size: 20px;
`;

const Greeting = () => {
  const { user, setUser } = useContext(AppContext);
  const history = useHistory();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, userName: e.target.value});
  };

  const handleLoginUser = () => {
    user.userName && setUser({...user, isLogged: true});
    history.push(route.home)
  };

  return (
    <CenterDiv>
      <Title>Enter your name</Title>
      <InputForm placeholder="Your name..." onChange={handleChangeInput} />
      <ButtonForm buttonName="Continue" onClick={handleLoginUser} />
    </CenterDiv>
  );
};

export default Greeting;
