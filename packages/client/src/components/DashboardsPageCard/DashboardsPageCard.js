import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Text } from "grommet";
import {useQuery} from '@apollo/client';
import {dashboardQuery} from '../../graphql/queries/dashboard';

export const DashboardsPageCard = (props) => {
  const history = useHistory();
  const {data} = useQuery(dashboardQuery, {variables: {id: props.dashboardId}})

  return data ? (
    <Box
      align="center"
      justify="center"
      pad="medium"
      round="large"
      height="small"
      width={{max: "medium", min: "small"}}
      border={{ color: "brand" }}
      onClick={() => {
        history.push(`/dashboard/${props.dashboardId}`)
      }}
      hoverIndicator={true}
    >
      <Text>{data.dashboard.title}</Text>
    </Box>
  ) : null;
};
