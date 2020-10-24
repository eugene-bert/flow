import React, {Fragment, useState} from 'react';
import { Box, Button, Layer, Text } from "grommet";
import { Form, FormField, Heading, TextArea, TextInput } from "grommet/index";
import { AddCircle } from 'grommet-icons';
import {useMutation} from '@apollo/client';
import {createIssueInColumn} from '../../graphql/mutations/issue';
import {columnQuery} from '../../graphql/queries/column';
import {FormClose} from 'grommet-icons/index';

export const ColumnAddIssueModal = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [create] = useMutation(createIssueInColumn);

  const submitHandle = () => {
    let {title, description} = inputs
    create({ variables: { column: props.columnId, dashboard: props.dahsboard, title, description}}).then((data) => {
      setShow(false)
    });
  };



  return (
    <Fragment>
        <AddCircle onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => {
            setShow(false);
          }}
        >
          <Box
            tag="header"
            justify="end"
            align="center"
            direction="row"
          >
            <Button
              icon={<FormClose />}
              onClick={() =>  setShow(false)}
            />
          </Box>
          <Box fill align="center" justify="center" width="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Add new issue to {props.columnName}</strong>
              </Heading>
              <Box gap="xsmall">
                <Form onSubmit={(data) => submitHandle()}>
                  <FormField
                    name="title"
                    label={<Text size="small">Title</Text>}
                  >
                    <TextInput
                      name="title"
                      type="title"
                      onChange={({ target }) =>
                        setInputs((state) => ({
                          ...state,
                          title: target.value,
                        }))
                      }
                    />
                  </FormField>
                  <FormField
                    name="description"
                    label={<Text size="small">Description</Text>}
                  >
                    <TextArea
                      name="description"
                      type="description"
                      size="xlarge"
                      onChange={({ target }) =>
                        setInputs((state) => ({
                          ...state,
                          description: target.value,
                        }))
                      }
                    />
                  </FormField>
                  <Box justify="center" direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                  </Box>
                </Form>
              </Box>
            </Box>
          </Box>
        </Layer>
      )}
    </Fragment>
  );
};
