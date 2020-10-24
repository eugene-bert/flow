import React, { useState } from "react";
import {Box, Button, Form, Layer, Text} from 'grommet';
import { FormField, Heading, TextInput } from "grommet/index";
import {useMutation, useReactiveVar} from '@apollo/client';
import { signUpMutation } from "../../graphql/mutations/user";
import { Link } from "react-router-dom";
import {isRegisteredVar} from '../../cache';
import {FormClose} from 'grommet-icons/index';

export const SignUpModal = () => {
  const [inputs, setInputs] = useState({});
  const {email, password, confirmPassword} = inputs
  const [show, setShow] = useState();
  const [signUpHandle] = useMutation(signUpMutation);
  const isRegistered = useReactiveVar(isRegisteredVar)

  const signUpUser = () => {
    if (password === confirmPassword) {
      signUpHandle({ variables: { email, password } })
        .then((data) => {
          isRegisteredVar(true)
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Passwords not match");
    }
  };

  return (
    <Box>
      <Button label="First time  here?" onClick={() => setShow(true)} margin="xsmall"/>
      {show && (
        <Layer
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
          {!isRegistered ? (
            <Box fill align="center" justify="center" width="medium" pad="large">
              <Heading level={4} margin="none">
                <strong>Sign Up</strong>
              </Heading>
              <Box gap="xsmall">
                <Form>
                <FormField name="email" label={<Text size="small">Email</Text>}>
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
                  type="password"
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
                <FormField
                  name="Confirm password"
                  label={<Text size="small">Confirm password</Text>}
                >
                  <TextInput
                    name="Confirm password"
                    type="password"
                    onChange={({ target }) =>
                      setInputs((state) => ({ ...state, confirmPassword: target.value }))
                    }
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
                </Form>
              </Box>
            </Box>
          ) : (
            <Box fill align="center" justify="center" width="medium" pad="large">
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
