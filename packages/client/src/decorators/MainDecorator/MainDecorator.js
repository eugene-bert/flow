import React, {Fragment, useEffect } from 'react';
import { Box } from "grommet";
import { SideBar } from "../../components/SideBar/SideBar";
import { Login } from "../../pages/Login/Login";
import { Switch, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import NotFound from '../../pages/NotFound/NotFound';
import {DashboardPage} from '../../pages/DashboardPage/DashboardPage';
import {MyProfilePage} from '../../pages/MyProfilePage/MyProfilePage';
import {useReactiveVar} from '@apollo/client';
import {deviceSizeVar, isLoggedInVar} from '../../cache';
import {Dashboards} from '../../pages/Dashboards/Dashboards';

const MainDecorator = (props) => {
  const loggedIn = useReactiveVar(isLoggedInVar)
  const deviceSize = useReactiveVar(deviceSizeVar)

  useEffect(() => {
    deviceSizeVar(props.deviceSize);
  }, [props.deviceSize]);

  return (
    <Fragment>
      <Box direction="row" flex>
        <Switch>
          <Route
            path="/"
            component={loggedIn ? Dashboards : Login}
            exact
          />
          <Route
            path="/dashboards"
            component={loggedIn ? Dashboards : Login}
            exact
          />
          <Route
            path="/login"
            component={loggedIn ? Dashboards : Login}
            exact
          />
          <Route
            path="/profile"
            component={loggedIn ? MyProfilePage : Login}
            exact
          />
          <Route
            path="/dashboard/:dashboardId"
            component={loggedIn ? DashboardPage : Login}
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
