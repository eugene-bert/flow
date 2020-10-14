import React from "react";
import { Box } from "grommet";
import { useSelector, useDispatch } from "react-redux";
import { setDeviceSize } from "../../store/actions";
import { SideBar } from "../../components/SideBar/SideBar";
import { Login } from "../../pages/Login/Login";
import { Switch, Route } from "react-router-dom";

const MainDecorator = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  dispatch(setDeviceSize(props.deviceSize));

  return (
    <Box direction="row" flex>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
      <SideBar />
    </Box>
  );
};

export default MainDecorator;
