import { createContext } from "react";

export const AppContext = createContext({
  user: {
    isLogged: false,
    userName: "",
  },
  setUser: (user: { isLogged: boolean; userName: string }) => {},
  locale: '',
  setLocale: (locale: string) => {},
  theme: 'light',
  setTheme: (theme: string) => {}
});
