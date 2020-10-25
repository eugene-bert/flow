import {
  Box,
  Button,
  Heading,
  FormField,
  TextInput,
  Text,
  Form,
} from "grommet/index";
import React, { useState } from "react";
import { loginMutation } from "../../graphql/mutations/user";
import { useMutation } from "@apollo/client";
import { SignUpModal } from "../../modals/SignUpModal/SignUpModal";
import {isLoggedInVar} from '../../cache';
import {useToasts} from 'react-toast-notifications';

export const Login = () => {
  const [inputs, setInputs] = useState({});
  const {email, password} = inputs
  const [loginHandle] = useMutation(loginMutation);
  const { addToast } = useToasts()
  const loginAction = () => {
    loginHandle({ variables: { email, password } }).then((data) => {
      localStorage.setItem("token", data.data.login.token)
      localStorage.setItem("tokenExpiration", data.data.login.tokenExpiration)
      isLoggedInVar(true)
    })
      .catch((error) => {
        addToast(error.message, { appearance: 'error' })
        console.log(error)
      });
  }

  return (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center">
        <Heading level={4} margin="none">
          <strong>Login</strong>
        </Heading>
        <Box gap="xsmall">
          <Form onSubmit={(data) => loginAction()}>
            <FormField
              name="email"
              label={<Text size="small">Email</Text>}
            >
              <TextInput
                name="email"
                type="email"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, email: target.value }))
                }
              />
            </FormField>
            <FormField
              name="password"
              label={<Text size="small">Password</Text>}
            >
              <TextInput
                name="password"
                type="password"
                onChange={({ target }) =>
                  setInputs((state) => ({ ...state, password: target.value }))
                }
              />
            </FormField>
            <Box justify="center" direction="row" gap="medium">
              <Button type="submit" primary label="Submit" margin="small"/>
            </Box>
          </Form>
          <SignUpModal />
        </Box>
      </Box>
    </Box>
  );
};
