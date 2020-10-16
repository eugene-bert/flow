import { Box  } from "grommet/index";
import React, { useEffect } from 'react';
import { issueQuery } from "../../graphql/queries/issue";
import {useDispatch, useSelector} from 'react-redux';
import {fetchIssues } from '../../actions/issueActions';
import {client} from '../../index';
import {DashboardColumn} from '../DashboardColumn/DashboardColumn';

export const Dashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const mainColumnsArray = ["Todo", "Done", "In progress"]

  useEffect(()=> {
    const fetchData = async _ => {
      const result = await client.query({query: issueQuery});
      dispatch(fetchIssues(result.data.issues))
    }
    fetchData().catch(r => console.log(r))
  }, []);

  return state.issueReducer.columns ? (
      <Box direction="column" basis="full">
        <Box pad="medium">Dashboard</Box>
        <Box direction="row" overflow="scroll" basis="full">
          {/*TODO: implement column sorting functionality*/}
          <DashboardColumn columnName={'Todo'}/>
          <DashboardColumn columnName={'In progress'}/>
          <DashboardColumn columnName={'Done'}/>
          {state.issueReducer.columns.map((el, index) => {
            if (!mainColumnsArray.includes(el) && el !==null) {
              return <DashboardColumn key={index + 1} columnName={el}/>
            }
          })}
        </Box>
      </Box>
  ) : null ;
};
