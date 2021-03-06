import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../constants/styleConstants";
import { AppContext } from "../../context/AppContext";
import LanguageDropdown from "../dropdown/LanguageDropdown";
import ToggleButton from "../toggle_button/ToggleButton";
import ButtonForm from "../button/ButtonForm";
import { messageIds } from "../../constants/generalContants";

const { FormattedMessage, useIntl } = require("react-intl");

interface MenuProps {
  isMenuOpen: boolean;
  theme?: string;
}

const Sidebar = styled.div`
  height: 100%;
  background-color: ${(props: MenuProps) =>
    props.theme === "light" ? colors.lightGray : colors.darkGray};
  position: fixed;
  z-index: 1;
  top: 72px;
  right: 0;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.4s ease-out;
  width: ${(props: MenuProps) => (props.isMenuOpen ? "25%" : "0%")};
`;

const Label = styled.label`
  color: white;
  margin-right: 20px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  text-align: center;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SpanFlex = styled.span`
  display: flex;
  text-align: center;
  margin: 20px 0;
`;

const ButtonCloseMenu = styled.button`
  position: absolute;
  top: 10px;
  padding: 5px 10px;
  text-align: center;
  border: none;
  border-radius: 20px;
  background-color: ${colors.blue};
  color: white;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const SidebarMenu = () => {
  const { user, setUser, isMenuOpen, setIsMenuOpen, theme } = useContext(
    AppContext
  );

  const logoutUser = () => setUser({ ...user, isLogged: false });

  const buttonName = useIntl().formatMessage({ id: messageIds.logout });

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Sidebar isMenuOpen={isMenuOpen} theme={theme} onClick={stopPropagation}>
      <ButtonCloseMenu onClick={() => setIsMenuOpen(false)}>x</ButtonCloseMenu>
      <Center>
        <span>
          <Label>
            <FormattedMessage id={messageIds.language} />
          </Label>
          <LanguageDropdown colored={true} />
        </span>
        <SpanFlex>
          <Label>
            <FormattedMessage id={messageIds.theme} />
          </Label>
          <ToggleButton />
        </SpanFlex>
      </Center>
      <Bottom>
        <ButtonForm
          onClick={logoutUser}
          buttonName={buttonName}
          buttonWidth={"150px"}
        />
      </Bottom>
    </Sidebar>
  );
};

export default SidebarMenu;
