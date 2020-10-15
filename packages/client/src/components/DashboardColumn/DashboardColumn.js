import React from "react";
import {Box, Heading, Paragraph} from 'grommet/index';
import {AddIssueModal} from '../../modals/AddIssueModal/AddIssueModal';

export const DashboardColumn = () => {
  return (
    <Box
      direction="column"
      border={{ color: "brand", size: "medium" }}
      basis="medium"
      width={("medium", { min: "medium" })}
      pad="medium"
      margin={{right: "small"}}
      responsive={false}
    >
      <Heading level="3" margin="small" textAlign="center">
        TODO
      </Heading>
      <Paragraph margin="none">
        We can't find the page that you're looking for. Check the URL and
        try again.
      </Paragraph>
      <Box margin="small">
        <AddIssueModal />
      </Box>
    </Box>
  )
}