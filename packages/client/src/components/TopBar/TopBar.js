import { Box, Button, Heading } from "grommet/index";
import React from "react";
import { Menu } from "grommet-icons/index";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { isSideBarOpenVar } from "../../cache";
import {Return} from 'grommet-icons';
import {Text} from 'grommet';

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="color1"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const ButtonStyle = styled.div`
  a {
    color: #F3F3F3;
    text-decoration: none;
    cursor: pointer;
    &:hover {
     color: #59c173;
     transition: .5s color;
    }
  }
`;

export const TopBar = () => {
  const location = useLocation();

  return (
    <AppBar>
      <Box direction="row">
        <Heading level="3" margin="none" color="#F3F3F3">
          Flow
        </Heading>
      </Box>
      {location.pathname !== "/" && location.pathname !== "/dashboards" ? (
        <ButtonStyle>
          <Link to="/dashboards">
            Return to Dashboards
          </Link>
        </ButtonStyle>
      ) : null}
    </AppBar>
  );
};
