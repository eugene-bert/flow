import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Paragraph } from "grommet/index";

export default memo(() => (
  <Box flex align="center" justify="center">
    <Box align="center" justify="center">
      <Heading level="1" margin="none">
        Oops! Error 404
      </Heading>
      <Heading level="4" margin="none">
        Page Not Found
      </Heading>
    </Box>
      <Paragraph margin="none">
        We can't find the page that you're looking for. Check the URL and try
        again.
      </Paragraph>
      <Link to="/" className="ui primary button">
        Go To Main page
      </Link>
  </Box>
));
