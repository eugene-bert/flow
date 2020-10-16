import React, { useState } from "react";
import { Box, Layer } from "grommet";
import { Heading } from "grommet/index";

export const IssueComponent = (props) => {
  const [show, setShow] = useState();

  return (
    <Box
      pad="small"
      margin="small"
      width="medium"
      border={{ color: "brand", size: "small" }}
      onClick={() => {
        setShow(true);
      }}
    >
      <Heading textAlign="center" level={5} margin="none">
        {props.title}
      </Heading>
      {show ? (
        <Layer
          onEsc={() => {
            setShow(false);
          }}
          onClickOutside={() => {
            setShow(false);
          }}
        >
          <Box flex align="center" justify="center" width="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>{props.title}</strong>
              </Heading>
              <Box gap="xsmall">
                <p>{props.description}</p>
              </Box>
            </Box>
          </Box>
        </Layer>
      ) : null}
    </Box>
  );
};
