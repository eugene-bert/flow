import React, {Fragment} from 'react';
import { Grid, Box, Main } from "grommet";
import { useQuery } from "@apollo/client";
import { DashboardsPageCard } from "../../components/DashboardsPageCard/DashboardsPageCard";
import DashboardsPageCardCreate from "../../components/DashboardsPageCardCreate/DashboardsPageCardCreate";
import { meQuery } from "../../graphql/queries/user";
import styled from "styled-components";
import {ClipLoader} from 'react-spinners';
import {css} from '@emotion/core';

const DashboardBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const DashBoardsGrid = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const loader = css`
  display: block;
  margin: auto;
`;

export const Dashboards = () => {
  const { data, refetch } = useQuery(meQuery);

  return data ? (
    <Fragment>
      <Box direction="row" overflow="auto" basis="full">
        <Main pad="medium">
          <DashboardBar>
            <DashboardsPageCardCreate refetch={refetch} />
          </DashboardBar>
          <DashBoardsGrid>
            <Grid columns="small" rows="small" gap="medium" fill="horizontal">
              {data.me.dashboards.map((dashboard, index) => {
                return (
                  <DashboardsPageCard key={index} dashboardId={dashboard} />
                );
              })}
            </Grid>
          </DashBoardsGrid>
        </Main>
      </Box>
    </Fragment>
  ) : (
    <ClipLoader
      css={loader}
      size={150}
      color="#5d26c1"
    />
  );
};
