import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, createHttpLink } from "@apollo/client";
import { ToastProvider } from 'react-toast-notifications'
import AppRoot from "./decorators";
import {setContext} from '@apollo/client/link/context';
import {cache} from './cache'


const httpLink = createHttpLink({
  uri: "http://localhost:5001",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-token": token ? `${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ToastProvider placement="top-center" autoDismissTimeout={1500} autoDismiss={true}>
      <AppRoot />
    </ToastProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
