import React, { Fragment } from "react";
import {Grid, Box, Text, Main} from 'grommet';
import { useQuery } from "@apollo/client";
import { dashboardsQuery } from "../../graphql/queries/dashboard";
import { DashboardsPageCard } from "../../components/DashboardsPageCard/DashboardsPageCard";
import  DashboardsPageCardCreate   from "../../components/DashboardsPageCardCreate/DashboardsPageCardCreate";
import {withApollo} from '@apollo/client/react/hoc';
import {meQuery} from '../../graphql/queries/user';


export const Dashboards = () => {
  const { data, loading, error } = useQuery(meQuery);
  // TODO: find smth instead of pollInterval: 500

  return data ? (
    <Fragment>
      <Box direction="row" overflow="auto" basis="full">
        <Main pad="medium">
          <DashboardsPageCardCreate />
          <Grid columns="small" rows="small" gap="medium" fill="horizontal">
            {data.me.dashboards.map((dashboard, index) => {
              return <DashboardsPageCard key={index} dashboardId={dashboard}/>;
            })}
          </Grid>
        </Main>
      </Box>
    </Fragment>
  ) : null;
};
