import {
  Box,
  Button,
  Heading,
  FormField,
  TextInput,
  Text,
  Form,
} from "grommet/index";
import React, {useState} from 'react';
import {meQuery} from '../../graphql/queries/user';
import {useMutation, useQuery} from '@apollo/client';
import {updateMeMutation} from '../../graphql/mutations/user';

export const MyProfilePage = () => {
  const [inputs, setInputs] = useState({});
  const {email, firstName, lastName } = inputs
  const {data, loading, error} = useQuery(meQuery)
  const [updateMe] = useMutation(updateMeMutation)

  const sumbitHandle = () => {
    updateMe({variables: { email, firstName, lastName }}).then(data => {
      console.log(data)
    })
  }



  return data ? (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center">
        <Heading level={4} margin="none">
          <strong>My profile</strong>
        </Heading>
        <Box gap="xsmall">
          <Form onSubmit={(data) => sumbitHandle()}>
            <FormField
              name="email"
              label={<Text size="small">Email</Text>}
            >
              <TextInput
                name="email"
                type="email"
                defaultValue={data.me.email}
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, email: target.value }))
                }
              />
            </FormField>
            <FormField
              name="firstName"
              label={<Text size="small">Name</Text>}
            >
              <TextInput
                name="firstName"
                type="firstName"
                defaultValue={data.me.firstName}
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, firstName: target.value }))
                }
              />
            </FormField>
              <FormField
                name="lastName"
                label={<Text size="small">Surname</Text>}
              >
                <TextInput
                  name="lastName"
                  type="lastName"
                  defaultValue={data.me.lastName}
                  onChange={({ target }) =>
                    setInputs((state) => ({ ...state, lastName: target.value }))
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
  ) : null;
};
