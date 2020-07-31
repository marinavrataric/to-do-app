import React, { ChangeEvent, useContext, useState } from "react";
import styled from "styled-components";
import InputForm from "../../components/input/InputForm";
import ButtonForm from "../../components/button/ButtonForm";
import { AppContext } from "../../context/AppContext";
import { useHistory } from "react-router-dom";
import { route, messageIds } from "../../constants/generalContants";
import { CenterDiv } from "../../constants/styleConstants";

const { FormattedMessage, useIntl } = require("react-intl");

const Title = styled.h2`
  font-size: 20px;
`;

const Greeting = () => {
  const { user, setUser, theme } = useContext(AppContext);
  const history = useHistory();
  const [nameInputText, setNameInputText] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInputText(e.target.value)
  };

  const handleLoginUser = () => {
    setUser({ userName: nameInputText, isLogged: true });
    setNameInputText('')
    history.push(route.home);
  };

  const placeholder = useIntl().formatMessage({id: messageIds.namePlaceholder})
  const buttonName = useIntl().formatMessage({id: messageIds.btnContinue})

  return (
    <CenterDiv>
      <Title>
        <FormattedMessage id={messageIds.inputName} />
      </Title>
      <InputForm
        value={nameInputText}
        placeholder={placeholder}
        onChange={handleChangeInput}
        theme={theme}
      />
      <ButtonForm
        buttonName={buttonName}
        onClick={handleLoginUser}
      />
    </CenterDiv>
  );
};

export default Greeting;
