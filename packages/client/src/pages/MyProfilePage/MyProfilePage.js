import {
  Box,
  Button,
  Heading,
  FormField,
  TextInput,
  Text,
  Form,
} from "grommet/index";
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {client} from '../../index';
import {meQuery} from '../../graphql/queries/user';
import {fetchUser, setUserEmail} from '../../actions/userActions';

export const MyProfilePage = () => {
  const state = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});

  useEffect(()=> {
    const fetchData = async _ => {
      const result = await client.query({query: meQuery});
      dispatch(fetchUser(result.data.me))
    }
    fetchData().catch(r => console.log(r))
  }, []);

  return state.user ? (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center">
        <Heading level={4} margin="none">
          <strong>My profile</strong>
          {console.log(state.user)}
        </Heading>
        <Box gap="xsmall">
          <Form onSubmit={(data) => console.log(state)}>
            <FormField
              name="email"
              label={<Text size="small">Email</Text>}
            >
              <TextInput
                name="email"
                type="email"
                placeholder={state.user.email}
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
