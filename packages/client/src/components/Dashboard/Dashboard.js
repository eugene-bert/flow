import { Box, Tabs, Tab, Grid, Heading, Paragraph } from "grommet/index";
import React, {Fragment, useEffect, Suspense} from 'react';
import { useQuery } from "@apollo/client";
import { issueQuery } from "../../graphql/queries/issue";
import { DashboardColumn } from "../DashboardColumn/DashboardColumn";
import {useDispatch, useSelector} from 'react-redux';
import {fetchIssues} from '../../actions/issueActions';

export const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(issueQuery);
  const columnArray = () => {
      state.issueReducer.issues.map(el => {
        return console.log(el.title)
      })
  }

  React.useEffect(() => {
   dispatch(fetchIssues(data))
  }, [data]);

  return (
      <Box direction="column" basis="full">
        <Box pad="medium">Text</Box>
        <Box direction="row" overflow="scroll" basis="full">
          <DashboardColumn />
          <DashboardColumn />
          <DashboardColumn />
          {console.log(state)}
        </Box>
      </Box>
  );
};
