import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Paragraph } from "grommet/index";
import {Main} from 'grommet';

export default memo(() => (
  <Box flex align="center" justify="center">
    <Box align="center" justify="center">
      <Main pad="large">
        <Heading> Oops!  Error 404</Heading>
        <Paragraph>        We can't find the page that you're looking for. Check the URL and try
          again.</Paragraph>
      </Main>
    </Box>
  </Box>
));
