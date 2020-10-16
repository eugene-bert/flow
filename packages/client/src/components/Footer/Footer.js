import { Box } from "grommet/index";
import React from "react";
import {Text} from 'grommet';

export const AppFooter = (props) => (
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

export const Footer = () => {
  return (
    <AppFooter>
      <Box flex align="center" justify="center">
        <Text size="small">Footer</Text>
      </Box>
    </AppFooter>
  );
};
