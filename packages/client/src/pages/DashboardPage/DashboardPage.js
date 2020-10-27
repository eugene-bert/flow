import React, { Fragment } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Box, Main } from "grommet/index";
import { useQuery } from "@apollo/client";
import { meQuery } from "../../graphql/queries/user";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { myEmailVar } from "../../cache";

export const DashboardPage = () => {
  const { dashboardId } = useParams();
  const { data, refetch } = useQuery(meQuery, {
    variables: {
      fetchPolicy: "cache-and-network",
      notifyOnNetworkStatusChange: true,
    }
  });

  if (data) {
    myEmailVar(data.me.email);
  }

  return data ? (
    <Fragment>
      <Main pad="medium">
        <Box direction="column" basis="full">
          {data.me.dashboards.includes(dashboardId) ? (
            <Fragment>
              <Dashboard refetch={refetch} dashboardId={dashboardId} />
            </Fragment>
          ) : (
            <Redirect
              to={{
                pathname: "/dashboards",
              }}
            />
          )}
        </Box>
      </Main>
    </Fragment>
  ) : null;
};
