import React, {useEffect, useState} from 'react';
import { Box, Layer, TextInput } from "grommet";
import { Button, Form, Heading } from "grommet/index";
import {useMutation, useQuery, useReactiveVar} from '@apollo/client';
import { updateIssue } from "../../graphql/mutations/issue";
import {deviceSizeVar} from '../../cache';
import {oneIssueQuery} from '../../graphql/queries/issue';

export const IssueComponent = (props) => {
  const [show, setShow] = useState();
  const [update] = useMutation(updateIssue);
  const id = props.issueId;
  const {data, loading, error} = useQuery(oneIssueQuery, {variables: {id}})

  const submitHandle = () => {
    let title = document.getElementsByClassName("issueEditHeading")[0]
        .innerHTML,
      description = document.getElementsByClassName("issueEditDescription")[0]
        .innerHTML;
    update({ variables: { id, title, description } }).then((data) => {
      console.log(data);
    });
  };


  useEffect(() => {
    deviceSizeVar(props.deviceSize);
  }, [props.title, props.description]);

  return data ? (
    <Box
      pad="small"
      margin="small"
      width="medium"
      height={{min: "xsmall"}}
      border={{ color: "brand", size: "small" }}
      onClick={() => {
        setShow(true);
      }}
    >
      <Heading textAlign="center" level={5} margin="none">
        {data.issue.title}
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
                  {data.issue.title}
                </strong>
              </Heading>
              <Box gap="xsmall">
                <p
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  className="issueEditDescription"
                >
                  {data.issue.description}
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
  ) : null;
};
