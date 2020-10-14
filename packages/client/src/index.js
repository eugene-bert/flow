import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import AppRoot from "./decorators";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {setContext} from '@apollo/client/link/context';


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
      authorization: token ? `x-token ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
