import React, { ChangeEvent, useContext, useEffect } from "react";
import styled from "styled-components";
import InputForm from "../../components/input/InputForm";
import ButtonForm from "../../components/button/ButtonForm";
import { AppContext } from "../../context/AppContext";
import { useHistory } from 'react-router-dom';
import { route } from "../../constants/generalContants";

const CenterDiv = styled.div`
  width: 300px;
  height: 300px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  position: absolute;
  text-align: center;
`;

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
