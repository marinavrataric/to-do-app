import React, { useContext, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Greeting from "../pages/greeting_page/Greeting";
import ToDoList from "../pages/to_do_page/ToDoList";
import { AppContext } from "../context/AppContext";
import { UserInterface } from "../constants/UserInterface";

const Routes = () => {
  const { user } = useContext(AppContext);

  return (
    <Switch>
      <Route exact path="/">
        {!user.isLogged ? <Redirect to="/start" /> : <ToDoList />}
      </Route>
      <Route path="/start">{!user.isLogged && <Greeting />}</Route>
    </Switch>
  );
};

export default Routes;
