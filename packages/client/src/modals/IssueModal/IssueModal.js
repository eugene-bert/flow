import React from "react";
import { Box } from "grommet";
import { Heading } from "grommet/index";

export const IssueModal = (props) => {
  return (
          <Box flex align="center" justify="center" width="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Add new issue to text</strong>
              </Heading>
              <Box gap="xsmall">
                <p>
                  Text
                </p>
              </Box>
            </Box>
          </Box>
  );
};
