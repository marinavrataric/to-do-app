import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes/Routes";
import { AppContext } from "./context/AppContext";
import NavAppTodo from "./components/nav/NavAppTodo";
import NavAppGreeting from "./components/nav/NavAppGreeting";
import { UserInterface } from "./interfaces/UserInterface";

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

  return (
    <div>
      <GlobalStyle />
      <AppContext.Provider value={{ user, setUser }}>
        {user.isLogged ? <NavAppTodo /> : <NavAppGreeting />}
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
