import React, {Fragment, useState} from 'react';
import {Box, Text} from 'grommet';
import {Button, Form, FormField, Heading, Layer, TextInput} from 'grommet/index';
import {useMutation} from '@apollo/client';
import {createDashboard} from '../../graphql/mutations/dashboard';
import {FormClose} from 'grommet-icons/index';
import {useToasts} from 'react-toast-notifications';


const DashboardsPageCardCreate = (props) => {
  const [inputs, setInputs] = useState({});
  const [show, setShow] = useState(false);
  const [create] = useMutation(createDashboard);
  const { addToast } = useToasts();

  const submitHandle = () => {
    let title = inputs.title
    create({ variables: { title }}).then((data) => {
      props.refetch()
      setShow(false)
      addToast(`${inputs.title} created successfully`, { appearance: 'success' })
    }).catch(error => {
      addToast(error.message, { appearance: 'error' })
    });
  };

  return (
    <Fragment>
      <Button label="Create new dashboard" onClick={() => setShow(true)}/>
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
    </Fragment>
  );
};

export default DashboardsPageCardCreate