import { Box } from "grommet/index";
import React from "react";

export const theme = {
  defaultMode: "light",
  global: {
    colors: {
      brand: "#90ee90",
      background: {
        dark: "#111111",
        light: "#FFFFFF",
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

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
