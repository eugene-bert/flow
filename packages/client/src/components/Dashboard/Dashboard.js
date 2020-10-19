import { Box  } from "grommet/index";
import React from 'react';
import { issueQuery } from "../../graphql/queries/issue";
import {DashboardColumn} from '../DashboardColumn/DashboardColumn';
import {useQuery} from '@apollo/client';

export const Dashboard = () => {
  const mainColumnsArray = ["Todo", "Done", "In progress"]
  const {data, loading, error} = useQuery(issueQuery)

  function removeDuplicates(data) {
    return [...new Set(data)]
  }

  return data ? (
      <Box direction="column" basis="full">
        <Box pad="medium">Dashboard</Box>
        <Box direction="row" overflow="scroll" basis="full">
          {/*TODO: implement column sorting functionality*/}
          <DashboardColumn columnName={'Todo'}/>
          <DashboardColumn columnName={'In progress'}/>
          <DashboardColumn columnName={'Done'}/>
          {removeDuplicates(data.issues.map(el => el.column)).map((el, index) => {
            if (!mainColumnsArray.includes(el) && el !==null) {
              return <DashboardColumn key={index + 1} columnName={el}/>
            }
          })}
        </Box>
      </Box>
  ) : null ;
};
