import React, {Fragment, useState} from 'react';
import { Box, RadioButtonGroup, Text } from "grommet";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  FormField,
  Heading,
  Layer,
} from "grommet/index";
import { useMutation } from "@apollo/client";
import {deleteColumn} from '../../graphql/mutations/column';
import {FormClose} from 'grommet-icons/index';
import {useToasts} from 'react-toast-notifications';

const ColumnDelete = (props) => {
  const [value, setValue] = React.useState(`no let's keep it`);
  const [show, setShow] = useState(false);
  const [remove] = useMutation(deleteColumn);
  const { addToast } = useToasts()

  const submitHandle = () => {
    if (value === "yes, please delete this column") {
      remove({variables: {id: props.dashboardId}}).then(data => {
        addToast(`Removed Successfully`, { appearance: 'success' })
        console.log(data)
      }).catch(error => {
        // TODO: check why there is an error
        addToast(error.message, { appearance: 'error' })
      })
      setShow(false)
    } else {
      setShow(false)
    }
  };

  return (
    <Fragment>
      <Button label="Delete column" onClick={() => setShow(true)} margin="small"/>
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
          <Box fill align="center" justify="center" width="medium">
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Delete column</strong>
              </Heading>
              <Box gap="xsmall">
                <Form onSubmit={(data) => submitHandle()}>
                  <FormField
                    name="title"
                    label={<Text size="small">Are you sure?</Text>}
                  >
                    <RadioButtonGroup
                      name="doc"
                      options={['yes, please delete this column', `no, let's keep it`]}
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                    />
                  </FormField>
                  <Box justify="center" direction="row" gap="medium" pad="medium">
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

export default ColumnDelete;
