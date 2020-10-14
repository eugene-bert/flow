import {
  Box,
  Button,
  Heading,
  FormField,
  TextInput,
} from "grommet/index";
import React from "react";
import { loginMutation } from "../../graphql/mutations/user";
import { useMutation } from "@apollo/client";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginHandle, { data }] = useMutation(loginMutation);

  return (
    <Box flex align="center" justify="center">
      <Box align="center" justify="center" pad="xsmall" margin="xsmall">
        <Heading level={3} margin="none">
          <strong>Login</strong>
        </Heading>
        <Box pad={{ top: "medium" }} gap="small">
          <FormField name="email" htmlfor="text-input-id" label="email">
            <TextInput
              id="text-input-id"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormField>
          <FormField name="password" htmlfor="text-input-id" label="password">
            <TextInput
              id="text-input-id"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormField>
          <Box justify="center" direction="row" gap="medium">
            <Button
              type="submit"
              primary
              label="Submit"
              onClick={() => {
                loginHandle({ variables: { email, password } })
                  .then((data) => console.log(data))
                  .catch((error) => console.log(error));
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
