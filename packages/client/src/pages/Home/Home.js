import React, {Fragment}  from "react";
import {Box} from 'grommet/index';
import {Dashboards} from '../Dashboards/Dashboards';

export const Home = () => {
  return (
    <Fragment>
      <Box direction='column' basis="full">
        <Dashboards/>
      </Box>
    </Fragment>
  );
};
