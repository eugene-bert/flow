import React from "react";
import MainDecorator from "./MainDecorator/MainDecorator";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, Grommet, ResponsiveContext } from "grommet/index";
import { theme } from "./styles";
import { TopBar } from "../components/TopBar/TopBar";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";

const AppRoot = () => {
  return (
    <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <TopBar />
              <MainDecorator deviceSize={size} />
              <FooterComponent />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};

export default AppRoot;
