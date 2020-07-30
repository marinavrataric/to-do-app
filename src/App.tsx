import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes/Routes";
import { AppContext } from "./context/AppContext";
import NavAppTodo from "./components/nav/NavAppTodo";
import NavAppGreeting from "./components/nav/NavAppGreeting";
import { UserInterface } from "./interfaces/UserInterface";
import { messages } from "./constants/generalContants";
const {IntlProvider}  = require("react-intl");

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open Sans;
  }
`;

function App() {
  const [user, setUser] = useState<UserInterface>({
    isLogged: false,
    userName: "",
  });

  const [locale, setLocale] = useState('en')
  
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
    <div>
      <GlobalStyle />
      <AppContext.Provider value={{ user, setUser, locale, setLocale }}>
        {user.isLogged ? <NavAppTodo /> : <NavAppGreeting />}
        <Routes />
      </AppContext.Provider>
    </div>
    </IntlProvider>
  );
}

export default App;
