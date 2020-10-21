import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Text } from "grommet";

export const DashboardsPageCard = (props) => {
  const history = useHistory();

  return (
    <Box
      align="center"
      justify="center"
      pad="large"
      round="large"
      height="small"
      border={{ color: "brand" }}
      onClick={() => {
        console.log(props)
        console.log(history)
        history.push(`/dashboard/${props.dashboard.id}`)
      }}
    >
      <Text>{props.dashboard.title}</Text>
    </Box>
  );
};
