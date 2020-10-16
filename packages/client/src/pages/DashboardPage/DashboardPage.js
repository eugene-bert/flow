import React, {Fragment}  from "react";
import {Dashboard} from "../../components/Dashboard/Dashboard"
import {Box} from 'grommet/index';

export const DashboardPage = () => {
  return (
    <Fragment>
      <Box direction='column' basis="full">
        <Dashboard/>
      </Box>
    </Fragment>
  );
};
