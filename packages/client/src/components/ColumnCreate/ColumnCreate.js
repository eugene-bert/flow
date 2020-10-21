import React, {useState} from 'react';
import {Box, Text} from 'grommet';
import {Button, Form, FormField, Heading, Layer, TextInput} from 'grommet/index';
import {useMutation} from '@apollo/client';
import {createColumn} from '../../graphql/mutations/column';

const ColumnCreate = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [create] = useMutation(createColumn);

  const submitHandle = () => {
    let title = inputs.title,
      id = props.dashboardId

    create({ variables: { title, dashboard: id} }).then((data) => {
      console.log(data)
    });
  };


  return (
    <Box
      align="center"
      justify="center"
      round="xsmall"
    >
      <Button label="Create new column" onClick={() => setShow(true)}/>
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
                <strong>Add new column</strong>
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

export default ColumnCreate