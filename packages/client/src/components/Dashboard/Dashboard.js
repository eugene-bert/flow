import { Box  } from "grommet/index";
import React from 'react';
import {createdByMeQuery, issueQuery} from '../../graphql/queries/issue';
import {DashboardColumn} from '../DashboardColumn/DashboardColumn';
import {useQuery} from '@apollo/client';
import {dashboardQuery} from '../../graphql/queries/dashboard';
import ColumnCreate from '../ColumnCreate/ColumnCreate';

export const Dashboard = (props) => {
  const {data, loading, error} = useQuery(dashboardQuery, {variables: {id: props.dashboardId}})


  return data ? (
      <Box direction="column" basis="full">
        <Box pad="medium">
          <ColumnCreate dashboardId={props.dashboardId}/>
        </Box>
        <Box direction="row" overflow="auto" basis="full">
          {data.dashboard.columns.map((el, index) => {
            return <DashboardColumn key={index} columnId={el}/>
          })}
          {/*TODO: implement column sorting functionality*/}
          {/*<DashboardColumn columnName={'Todo'}/>*/}
          {/*<DashboardColumn columnName={'In progress'}/>*/}
          {/*<DashboardColumn columnName={'Done'}/>*/}
          {/*{removeDuplicates(data.createdByMeIssues.map(el => el.column)).map((el, index) => {*/}
          {/*  if (!mainColumnsArray.includes(el) && el !==null) {*/}
          {/*    return <DashboardColumn key={index + 1} columnName={el}/>*/}
          {/*  }*/}
          {/*})}*/}
        </Box>
      </Box>
  ) : null ;
};
