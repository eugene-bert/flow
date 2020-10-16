import React, {Fragment, useEffect } from 'react';
import { Box } from "grommet";
import { SideBar } from "../../components/SideBar/SideBar";
import { Login } from "../../pages/Login/Login";
import { Switch, Route } from "react-router-dom";
import {useSelector} from 'react-redux';
import { Home } from "../../pages/Home/Home";
import NotFound from '../../pages/NotFound/NotFound';
import {DashboardPage} from '../../pages/DashboardPage/DashboardPage';
import {MyProfilePage} from '../../pages/MyProfilePage/MyProfilePage';

const MainDecorator = (props) => {
  const state = useSelector((state) => state);

  useEffect(() => {
    state.mainReducer.deviceSize = props.deviceSize;
  }, [props.deviceSize]);

  return (
    <Fragment>
      <Box direction="row" flex>
        <Switch>
          <Route
            path="/"
            component={state.authReducer.authenticated ? Home : Login}
            exact
          />
          <Route
            path="/login"
            component={state.authReducer.authenticated ? DashboardPage : Login}
            exact
          />
          <Route
            path="/profile"
            component={state.authReducer.authenticated ? MyProfilePage : Login}
            exact
          />
          <Route
            path="/dashboard"
            component={state.authReducer.authenticated ? DashboardPage : Login}
            exact
          />
          <Route component={NotFound} />
        </Switch>
        <SideBar deviceSize={props.deviceSize}/>
      </Box>
    </Fragment>
  );
};

export default MainDecorator;
