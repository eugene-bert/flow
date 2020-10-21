import React, {Fragment}  from "react";
import {useParams} from 'react-router-dom';
import {Dashboard} from "../../components/Dashboard/Dashboard"
import {Box} from 'grommet/index';

export const DashboardPage = () => {
  const {dashboardId} = useParams();
  return (
    <Fragment>
      <Box direction='column' basis="full">
        <Dashboard dashboardId={dashboardId}/>
      </Box>
    </Fragment>
  );
};
