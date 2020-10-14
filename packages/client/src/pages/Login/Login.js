import {
  Box,
  Button,
  Heading,
  FormField,
  TextInput,
} from "grommet/index";
import React, { useState } from "react";
import { loginMutation } from "../../graphql/mutations/user";
import { useMutation } from "@apollo/client";
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../actions/authActions';

export const Login = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginHandle] = useMutation(loginMutation);
  const loginAction = () => {
    loginHandle({ variables: { email, password } })
      .then((data) => {
        dispatch(signIn(data))
        console.log(data)
        console.log(state)
      })
      .catch((error) => console.log(error));
  }

  return (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center" pad="xsmall" margin="xsmall">
        <Heading level={3} margin="none">
          <strong>Login</strong>
        </Heading>
        <Box pad={{ top: "medium" }} gap="small">
          <FormField name="email" htmlfor="text-input-id" label="email">
            <TextInput
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormField>
          <FormField name="password" htmlfor="text-input-id" label="password">
            <TextInput
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormField>
          <Box justify="center" direction="row" gap="medium">
            <Button
              type="submit"
              primary
              label="Submit"
              onClick={() => loginAction()}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
