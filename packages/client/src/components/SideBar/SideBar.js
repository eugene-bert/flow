import { Box, Collapsible, Layer, Button } from "grommet/index";
import React from "react";
import { FormClose } from "grommet-icons";
import { Link } from "react-router-dom";
import {isLoggedInVar, isSideBarOpenVar} from '../../cache';
import {useReactiveVar} from '@apollo/client';
import {client} from '../../index';

export const SideBar = (props) => {
  const sideBar = useReactiveVar(isSideBarOpenVar)
  const loggedIn = useReactiveVar(isLoggedInVar)

  return (
    <React.Fragment>
      {!sideBar || props.deviceSize !== "small" ? (
        <Collapsible direction="horizontal" open={sideBar}>
          <Box
            flex
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            {loggedIn ? (
              <Box direction="column">
                <Link to="/profile" onClick={() => isSideBarOpenVar(false)}>
                  <Button>My profile</Button>
                </Link>
                <Link to="/dashboards" onClick={() => isSideBarOpenVar(false)}>
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  onClick={() => {
                    client.cache.evict({fieldName: 'me'})
                    client.cache.gc();
                    localStorage.clear();
                    isLoggedInVar(false);
                    isSideBarOpenVar(false);
                  }}
                >
                  Sign out
                </Button>
              </Box>
            ) : (
              <Link to="/login" onClick={() => isSideBarOpenVar(false)}>
                <Button>Login</Button>
              </Link>
            )}
          </Box>
        </Collapsible>
      ) : (
        <Layer>
          <Box
            background="light-2"
            tag="header"
            justify="end"
            align="center"
            direction="row"
          >
            <Button
              icon={<FormClose />}
              onClick={() => isSideBarOpenVar(false)}
            />
          </Box>
          <Box fill background="light-2" align="center" justify="center">
            {loggedIn ? (
              <Box direction="column">
                <Link to="/profile" onClick={() => isSideBarOpenVar(false)}>
                  <Button>My profile</Button>
                </Link>
                <Link to="/dashboards" onClick={() => isSideBarOpenVar(false)}>
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  onClick={() => {
                    client.cache.evict({fieldName: 'me'})
                    client.cache.gc();
                    localStorage.clear();
                    isLoggedInVar(false);
                    isSideBarOpenVar(false);
                  }}
                >
                  Sign out
                </Button>
              </Box>
            ) : (
              <Link to="/login" onClick={() => isSideBarOpenVar(false)}>
                <Button>Login</Button>
              </Link>
            )}
          </Box>
        </Layer>
      )}
    </React.Fragment>
  );
};
