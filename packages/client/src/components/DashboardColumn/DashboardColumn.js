import React from "react";
import { Box, Heading } from "grommet/index";
import { ColumnAddIssueModal } from "../../modals/ColumnAddIssueModal/ColumnAddIssueModal";
import { IssueListComponent } from "../IssueListComponent/IssueListComponent";
import {Text} from 'grommet';
import {FormNext} from 'grommet-icons';
import {deviceSizeVar} from '../../cache';

export const DashboardColumn = (props) => {

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
      </Heading>
      <IssueListComponent columnName={props.columnName} />
      <Box margin="small">
        <ColumnAddIssueModal columnName={props.columnName} />
      </Box>
        {deviceSizeVar() === "small" ? (
          <Box flex align="center" justify="center" width="medium" direction="row">
            <Text color='brand' weight="bold" size="large"> Swipe</Text>
            <FormNext color='brand' size="large"/></Box>
        ) : null }
    </Box>
  );
};
