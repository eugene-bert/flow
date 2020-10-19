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
import {useQuery} from '@apollo/client';

export const MyProfilePage = () => {
  const [inputs, setInputs] = useState({});
  const {data, loading, error} = useQuery(meQuery)



  return data ? (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center">
        <Heading level={4} margin="none">
          <strong>My profile</strong>
        </Heading>
        <Box gap="xsmall">
          <Form onSubmit={(data) => console.log(inputs)}>
            <FormField
              name="email"
              label={<Text size="small">Email</Text>}
            >
              <TextInput
                name="email"
                type="email"
                placeholder={data.me.email}
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, email: target.value }))
                }
              />
            </FormField>
            <FormField
              name="name"
              label={<Text size="small">Name</Text>}
            >
              <TextInput
                name="name"
                type="name"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, name: target.value }))
                }
              />
            </FormField>
              <FormField
                name="surname"
                label={<Text size="small">Surname</Text>}
              >
                <TextInput
                  name="surname"
                  type="surname"
                  onChange={({ target }) =>
                    setInputs((state) => ({ ...state, surname: target.value }))
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
