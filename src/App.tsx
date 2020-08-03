import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/Routes";
import { AppContext } from "./context/AppContext";
import NavAppTodo from "./components/nav/NavAppTodo";
import NavAppGreeting from "./components/nav/NavAppGreeting";
import { UserInterface } from "./interfaces/UserInterface";
import { messages } from "./constants/generalContants";
import { GlobalStyle } from "./constants/styleConstants";
import { lightTheme, darkTheme } from "./constants/themes";
const { IntlProvider } = require("react-intl");

function App() {
  const [user, setUser] = useState<UserInterface>({
    isLogged: false,
    userName: "",
  });

  const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          <AppContext.Provider
            value={{
              user,
              setUser,
              locale,
              setLocale,
              theme,
              setTheme,
              isMenuOpen,
              setIsMenuOpen
            }}
          >
            {user.isLogged ? <NavAppTodo /> : <NavAppGreeting />}
            <Routes />
          </AppContext.Provider>
        </div>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
