import { darkTheme } from "./themes";
import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  darkBlue: "#36475B",
  blue: "#0081A1",
  white: "#FFFFFF",
  darkGray: "#292C30",
};

export const CenterDiv = styled.div`
  width: 320px;
  height: 400px;
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

type ThemeType = typeof darkTheme;

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
body {
  margin: 0;
  padding: 0;
  font-family: Open Sans;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
}
`;
