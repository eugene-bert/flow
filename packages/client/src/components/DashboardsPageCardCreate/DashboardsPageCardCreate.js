import React, {useState} from 'react';
import {Box, Text} from 'grommet';
import {Button, Form, FormField, Heading, Layer, TextArea, TextInput} from 'grommet/index';
import {Link} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import {createDashboard, updateDashboard} from '../../graphql/mutations/dashboard';
import {FormClose} from 'grommet-icons/index';
import {isSideBarOpenVar} from '../../cache';

const DashboardsPageCardCreate = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [create] = useMutation(createDashboard);

  const submitHandle = () => {
    let title = inputs.title
    create({ variables: { title }}).then((data) => {
      props.refetch()
      setShow(false)
    });
  };

  return (
    <Box
      align="center"
      justify="center"
      pad="large"
      round="xsmall"
    >
      <Button label="Create new dashboard" onClick={() => setShow(true)}/>
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
          <Box fill align="center" justify="center" width="medium" pad="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Add new dashboard</strong>
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

export default DashboardsPageCardCreate