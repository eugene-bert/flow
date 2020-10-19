import React from "react";
import { Box } from "grommet";
import { IssueComponent } from "../IssueComponent/IssueComponent";
import {useQuery} from '@apollo/client';
import {createdByMeQuery} from '../../graphql/queries/issue';

export const IssueListComponent = (props) => {
  const {data, loading, error} = useQuery(createdByMeQuery)
  const issues = data.createdByMeIssues.filter(
    (el) => el.column === props.columnName
  );

  return (
    <Box>
      <Box flex align="center" justify="center">
        {issues.map((el, index) => {
          return <IssueComponent key={index} title={el.title} description={el.description} id={el.id}/>;
        })}
      </Box>
    </Box>
  );
};
