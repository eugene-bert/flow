import { Box, Button, Heading } from "grommet/index";
import React from "react";
import { Menu } from "grommet-icons/index";
import { toggleSideBar } from "../../actions/sideBarActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {Text} from 'grommet';

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
  const dispatch = useDispatch();

  return (
    <AppBar>
      <Heading level="3" margin="none">
        <Link to="/">
          <Text size="'large'">Flow</Text>
        </Link>
      </Heading>
      <Button
        icon={<Menu />}
        onClick={() => {
          dispatch(toggleSideBar());
        }}
      />
    </AppBar>
  );
};
