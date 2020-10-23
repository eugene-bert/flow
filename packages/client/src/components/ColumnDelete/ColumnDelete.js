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

const ColumnDelete = (props) => {
  const [value, setValue] = React.useState(`no let's keep it`);
  const [show, setShow] = useState(false);
  const [remove] = useMutation(deleteColumn);
  const history = useHistory();

  const submitHandle = () => {
    if (value === "yes, please delete this column") {
      remove({variables: {id: props.dashboardId}}).then(data => {
        console.log(data)
      })
      setShow(false)
      history.push('/dashboards')
    } else {
      setShow(false)
    }
    // let title = inputs.title,
    //   id = props.dashboardId;
    //
    // create({ variables: { title, dashboard: id } }).then((data) => {
    //   console.log(data);
    // });
  };

  return (
    <Fragment>
      <Button label="Delete column" onClick={() => setShow(true)} />
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

export default ColumnDelete;
