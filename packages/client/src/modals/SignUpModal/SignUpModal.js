import React, { useState } from "react";
import { Box, Button, Layer, Text } from "grommet";
import { FormField, Heading, TextInput } from "grommet/index";
import { useMutation } from "@apollo/client";
import { signUpMutation } from "../../graphql/mutations/user";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../actions/authActions";
import { Link } from "react-router-dom";

export const SignUpModal = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpHandle] = useMutation(signUpMutation);
  const signUpUser = () => {
    if (password === confirmPassword) {
      signUpHandle({ variables: { email, password } })
        .then((data) => {
          dispatch(signUp());
          console.log(data);
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Passwords not match");
    }
  };

  return (
    <Box>
      <Button label="First time  here?" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => {
            setShow(false);
          }}
        >
          {!state.authReducer.registered ? (
            <Box align="center" justify="center">
              <Heading level={4} margin="none">
                <strong>Sign Up</strong>
              </Heading>
              <Box gap="xsmall">
                <FormField name="email" label={<Text size="small">Email</Text>}>
                  <TextInput
                    name="email"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormField>
                <FormField
                  name="password"
                  type="password"
                  label={<Text size="small">Password</Text>}
                >
                  <TextInput
                    name="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </FormField>
                <FormField
                  name="Confirm password"
                  label={<Text size="small">Confirm password</Text>}
                >
                  <TextInput
                    name="Confirm password"
                    type="password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </FormField>
                <Box justify="center" direction="row" gap="medium">
                  <Button
                    type="submit"
                    primary
                    label="Submit"
                    onClick={() => signUpUser()}
                  />
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Text color="green">{email}</Text>
              <Text> Was successfully registered</Text>
              <Text>
                Please{" "}
                <Link to="/login" onClick={() => setShow(false)}>
                  login
                </Link>
              </Text>
            </Box>
          )}
        </Layer>
      )}
    </Box>
  );
};
