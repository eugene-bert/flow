import React from "react";
import { Box } from "grommet";
import { useSelector } from "react-redux";
import { IssueComponent } from "../IssueComponent/IssueComponent";

export const IssueListComponent = (props) => {
  const state = useSelector((state) => state);
  const issues = state.issueReducer.issues.filter(
    (el) => el.column === props.columnName
  );

  return (
    <Box>
      <Box flex align="center" justify="center">
        {issues.map((el, index) => {
          return <IssueComponent key={index} title={el.title} description={el.description}/>;
        })}
      </Box>
    </Box>
  );
};
