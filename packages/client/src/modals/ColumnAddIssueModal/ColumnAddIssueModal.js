import React, {Fragment, useState} from 'react';
import { Box, Button, Layer, Text } from "grommet";
import { Form, FormField, Heading, TextArea, TextInput } from "grommet/index";
import {useMutation} from '@apollo/client';
import {createIssueInColumn} from '../../graphql/mutations/issue';
import {FormClose} from 'grommet-icons/index';
import {useToasts} from 'react-toast-notifications';

export const ColumnAddIssueModal = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [create] = useMutation(createIssueInColumn);
  const { addToast } = useToasts()

  const submitHandle = () => {
    let {title, description} = inputs
    create({ variables: { column: props.columnId, dashboard: props.dahsboard, title, description}}).then((data) => {
      addToast(`Saved Successfully`, { appearance: 'success' })
      setShow(false)
      props.refetch()
    }).catch((error) => {
      addToast(error.message, { appearance: 'error' })
    });
  };



  return (
    <Fragment>
      <Button label="Add new issue" onClick={() => setShow(true)} />
      {show && (
        <Layer
          className="modal"
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
          <Box fill align="center" justify="center" width="medium" pad="small">
            <Box align="center" justify="center">
              <Heading level={4} margin="medium" >
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
