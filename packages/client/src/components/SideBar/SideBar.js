import { Box, Collapsible, Layer, Button } from "grommet/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormClose } from "grommet-icons";
import { closeSideBar, toggleSideBar } from "../../actions/sideBarActions";
import { signOut } from "../../actions/authActions";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!state.sideBarReducer.isOpen || state.deviceSize !== "small" ? (
        <Collapsible direction="horizontal" open={state.sideBarReducer.isOpen}>
          <Box
            flex
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            {state.authReducer.authenticated ? (
              <Button
                onClick={() => {
                  dispatch(signOut());
                  dispatch(closeSideBar());
                }}
              >
                Sign out
              </Button>
            ) : (
              <Link to="/login" onClick={() => dispatch(closeSideBar())}>
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
              onClick={() => dispatch(toggleSideBar())}
            />
          </Box>
          <Box fill background="light-2" align="center" justify="center">
            {state.authReducer.authenticated ? (
              <Button
                onClick={() => {
                  dispatch(signOut());
                  dispatch(closeSideBar());
                }}
              >
                Sign out
              </Button>
            ) : (
              <Link to="/login" onClick={() => dispatch(closeSideBar())}>
                <Button>Login</Button>
              </Link>
            )}
          </Box>
        </Layer>
      )}
    </React.Fragment>
  );
};
