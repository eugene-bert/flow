import React, { useState } from "react";
import { Box, Button, Layer, Text } from "grommet";
import { Form, FormField, Heading, TextArea, TextInput } from "grommet/index";
import { AddCircle } from 'grommet-icons';

export const ColumnAddIssueModal = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState();

  return (
    <Box>
      <Box flex align="center" justify="center">
        <AddCircle onClick={() => setShow(true)} />
      </Box>
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => {
            setShow(false);
          }}
        >
          <Box flex align="center" justify="center" width="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Add new issue to {props.columnName}</strong>
              </Heading>
              <Box gap="xsmall">
                <Form onSubmit={(data) => console.log(inputs)}>
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
                    name="assignee"
                    label={<Text size="small">Assignee</Text>}
                  >
                    <TextInput
                      name="assignee"
                      type="assignee"
                      onChange={({ target }) =>
                        setInputs((state) => ({
                          ...state,
                          assignee: target.value,
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
    </Box>
  );
};
