import React from "react";
import { Box } from "grommet";
import { SideBar } from "../../components/SideBar/SideBar";
import { Login } from "../../pages/Login/Login";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "../../pages/Home/Home";
import NotFound from '../../pages/NotFound/NotFound';

const MainDecorator = () => {
  const state = useSelector((state) => state);

  return (
    <Box direction="row" flex>
      <Switch>
        <Route
          path="/"
          component={state.authReducer.authenticated ? Home : Login}
          exact
        />
        <Route
          path="/login"
          component={state.authReducer.authenticated ? Home : Login}
          exact
        />
        <Route component={NotFound} />
      </Switch>
      <SideBar />
    </Box>
  );
};

export default MainDecorator;
