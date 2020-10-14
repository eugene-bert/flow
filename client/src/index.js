import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppRoot from "./decorators";
import { Provider } from "react-redux";
import { store } from "./store/store";

const client = new ApolloClient({
  uri: "http://localhost:5001",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppRoot />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
