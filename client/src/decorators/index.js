import React, { useState } from "react";
import MainDecorator from "./MainDecorator/MainDecorator";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, Grommet, ResponsiveContext } from "grommet/index";
import { theme } from "./styles";
import { TopBar } from "../components/TopBar/TopBar";
import { Provider } from "react-redux";
import { store } from "../store/store";

const AppRoot = () => {
  return (
    <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <TopBar />
              <MainDecorator deviceSize={size} />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};

export default AppRoot;
