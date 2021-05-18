// static imports
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";

// relative imports
import "./App.css";
import Users from "./components/Users";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <div>lambda</div>
        <Users />
      </>
    </ApolloProvider>
  );
}

export default App;
