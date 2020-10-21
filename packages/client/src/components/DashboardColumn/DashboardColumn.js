import React from "react";
import { Box, Heading } from "grommet/index";
import { ColumnAddIssueModal } from "../../modals/ColumnAddIssueModal/ColumnAddIssueModal";
import { IssueListComponent } from "../IssueListComponent/IssueListComponent";
import {Text} from 'grommet';
import {FormNext} from 'grommet-icons';
import {deviceSizeVar} from '../../cache';
import {useQuery} from '@apollo/client';
import {dashboardQuery} from '../../graphql/queries/dashboard';
import {columnQuery} from '../../graphql/queries/column';

export const DashboardColumn = (props) => {
  const {data, loading, error} = useQuery(columnQuery, {variables: {id: props.columnId}})

  if (data) {
    console.log(data)
  }

  console.log(props.columnId)

  return data ? (
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
        {data.column.title}
      </Heading>
      {/*<IssueListComponent columnName={props.columnName} />*/}
      <Box margin="small">
        <ColumnAddIssueModal columnName={data.column.title} />
      </Box>
        {deviceSizeVar() === "small" ? (
          <Box flex align="center" justify="center" width="medium" direction="row">
            <Text color='brand' weight="bold" size="large"> Swipe</Text>
            <FormNext color='brand' size="large"/></Box>
        ) : null }
    </Box>
  ) : null;
};
