import React, { Fragment } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Box, Heading, Main, Paragraph } from "grommet/index";
import { useQuery } from "@apollo/client";
import { dashboardQuery } from "../../graphql/queries/dashboard";
import { meQuery } from "../../graphql/queries/user";
import {Dashboard} from '../../components/Dashboard/Dashboard';

export const DashboardPage = () => {
  const { dashboardId } = useParams();
  const { data, loading, error } = useQuery(meQuery);

  return data ? (
    <Fragment>
      <Box direction="column" basis="full">
        {data.me.dashboards.includes(dashboardId) ? (
          <Fragment>
            <Dashboard dashboardId={dashboardId}/>
          </Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/dashboards",
            }}
          />
        )}
      </Box>
    </Fragment>
  ) : null;
};
