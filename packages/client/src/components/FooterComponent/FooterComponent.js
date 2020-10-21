import React from "react";
import {Anchor, Box, Footer, Text} from 'grommet';

export const FooterComponent = () => {
  return (
    <Footer
      background="brand"
      pad="medium"
      as="footer"
      align="center"
      direction="row"
      justify="between"
    >
      <Box flex justify="center">
        <Text alignSelf="center">Copyright</Text>
      </Box>
    </Footer>
  );
};
