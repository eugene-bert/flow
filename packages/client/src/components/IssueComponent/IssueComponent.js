import React, {useEffect, useState} from 'react';
import { Box, Layer, TextInput } from "grommet";
import { Button, Form, Heading } from "grommet/index";
import {useMutation, useQuery, useReactiveVar} from '@apollo/client';
import { updateIssue } from "../../graphql/mutations/issue";
import {deviceSizeVar} from '../../cache';

export const IssueComponent = (props) => {
  const [show, setShow] = useState();
  const [update] = useMutation(updateIssue);
  const id = props.id;


  useEffect(() => {
    deviceSizeVar(props.deviceSize);
  }, [props.title, props.description]);

  const submitHandle = () => {
    let title = document.getElementsByClassName("issueEditHeading")[0]
      .innerHTML,
    description = document.getElementsByClassName("issueEditDescription")[0]
      .innerHTML;
    update({ variables: { id, title, description } }).then((data) => {
      console.log(data);
    });
  };

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
          <Box flex align="center" justify="center" width="medium" pad="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  className="issueEditHeading"
                >
                  {props.title}
                </strong>
              </Heading>
              <Box gap="xsmall">
                <p
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  className="issueEditDescription"
                >
                  {props.description}
                </p>
              </Box>
              <Box justify="center" direction="row" gap="medium">
                <Button
                  primary
                  label="Save issue"
                  onClick={() => submitHandle()}
                />
              </Box>
            </Box>
          </Box>
        </Layer>
      ) : null}
    </Box>
  );
};
