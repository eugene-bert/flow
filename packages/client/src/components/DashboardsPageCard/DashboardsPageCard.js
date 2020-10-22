import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Text } from "grommet";
import {useQuery} from '@apollo/client';
import {dashboardQuery} from '../../graphql/queries/dashboard';

export const DashboardsPageCard = (props) => {
  const history = useHistory();
  const {data, loading, error} = useQuery(dashboardQuery, {variables: {id: props.dashboardId}})

  return data ? (
    <Box
      align="center"
      justify="center"
      pad="large"
      round="large"
      height="small"
      border={{ color: "brand" }}
      onClick={() => {
        history.push(`/dashboard/${props.dashboardId}`)
      }}
    >
      <Text>{data.dashboard.title}</Text>
    </Box>
  ) : null;
};
