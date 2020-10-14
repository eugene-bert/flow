import { Box, Button, Heading, Avatar } from "grommet/index";
import React from "react";
import { Menu, Like } from "grommet-icons/index";
import { setShowSideBar } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export const TopBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <AppBar>
      <Heading level="3" margin="none">
        <Link to="/">Flow</Link>
      </Heading>
      <Button
        icon={<Menu />}
        onClick={() =>
          dispatch(setShowSideBar(!state.sideBarReducer.sidebarIsOpen))
        }
      />
    </AppBar>
  );
};
