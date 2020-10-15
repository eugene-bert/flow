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
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/authActions";
import { SignUpModal } from "../../modals/SignUpModal/SignUpModal";

export const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const {email, password} = inputs
  const [loginHandle] = useMutation(loginMutation);
  const loginAction = () => {
    loginHandle({ variables: { email, password } })
      .then((data) => {
        dispatch(signIn(data));
        console.log(data);
        console.log(state);
      })
      .catch((error) => console.log(error));
  };

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
              <Button type="submit" primary label="Submit" />
            </Box>
          </Form>
          <SignUpModal />
        </Box>
      </Box>
    </Box>
  );
};
