import React from "react";
import MainDecorator from "./MainDecorator/MainDecorator";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, Button, Grommet, ResponsiveContext } from "grommet/index";
import { theme } from "./styles";
import { TopBar } from "../components/TopBar/TopBar";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { client } from "../index";
import { isLoggedInVar, isSideBarOpenVar } from "../cache";
import styled from "styled-components";
import "./styles.scss";
import { useReactiveVar } from "@apollo/client";

const SignOutButtonStyle = styled.div`
  margin: 20px;
  text-align: center;
`;

const AppRoot = () => {
  const loggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <TopBar />
              <MainDecorator deviceSize={size} />
              {loggedIn ? (
                <SignOutButtonStyle>
                  <Button
                    label="Sign out"
                    onClick={() => {
                      client.cache.evict({ fieldName: "me" });
                      client.cache.gc();
                      localStorage.clear();
                      isLoggedInVar(false);
                      isSideBarOpenVar(false);
                    }}
                  />
                </SignOutButtonStyle>
              ) : null}
              <FooterComponent />
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
};

export default AppRoot;
