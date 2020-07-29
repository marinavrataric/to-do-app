import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Greeting from "../pages/greeting_page/Greeting";
import ToDoList from "../pages/to_do_page/ToDoList";
import { AppContext } from "../context/AppContext";
import { route } from "../constants/generalContants";

const Routes = () => {
  const { user } = useContext(AppContext);

  return (
    <Switch>
      <Route exact path={route.home}>
        {!user.isLogged ? <Redirect to={route.login} /> : <ToDoList />}
      </Route>
      <Route path={route.login}>{!user.isLogged && <Greeting />}</Route>
    </Switch>
  );
};

export default Routes;
