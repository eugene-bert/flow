import { Box, Collapsible, Layer, Button } from "grommet/index";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormClose } from "grommet-icons";
import { setShowSideBar } from "../../store/actions";
import { Link } from "react-router-dom";

export const SideBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {!state.sideBarReducer.sidebarIsOpen || state.deviceSize !== "small" ? (
        <Collapsible
          direction="horizontal"
          open={state.sideBarReducer.sidebarIsOpen}
        >
          <Box
            flex
            width="medium"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            Sidebar
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
              onClick={() =>
                dispatch(setShowSideBar(!state.sideBarReducer.sidebarIsOpen))
              }
            />
          </Box>
          <Box fill background="light-2" align="center" justify="center">
            Sidebar
          </Box>
        </Layer>
      )}
    </React.Fragment>
  );
};
