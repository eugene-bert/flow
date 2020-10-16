import React from "react";
import { Box, Heading } from "grommet/index";
import { ColumnAddIssueModal } from "../../modals/ColumnAddIssueModal/ColumnAddIssueModal";
import { IssueListComponent } from "../IssueListComponent/IssueListComponent";
import {useSelector} from 'react-redux';
import {Text} from 'grommet';
import {FormNext} from 'grommet-icons';

export const DashboardColumn = (props) => {
  const state = useSelector((state) => state);
/*  const issues = state.issueReducer.issues.filter(
    (el) => el.column === props.columnName
  );*/

  return (
    <Box
      direction="column"
      border={{ color: "brand", size: "medium" }}
      basis="medium"
      width={("medium", { min: "medium" })}
      pad="small"
      margin={{ right: "small" }}
      responsive={false}
    >
      <Heading level="3" margin="small" textAlign="center">
        {props.columnName}
        {console.log(state)}
      </Heading>
      <IssueListComponent columnName={props.columnName} />
      <Box margin="small">
        <ColumnAddIssueModal columnName={props.columnName} />
      </Box>
        {state.mainReducer.deviceSize === "small" ? (
          <Box flex align="center" justify="center" width="medium" direction="row">
            <Text color='brand' weight="bold" size="large"> Swipe</Text>
            <FormNext color='brand' size="large"/></Box>
        ) : null }
    </Box>
  );
};
