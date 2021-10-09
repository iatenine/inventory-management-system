import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/product";

const httpLink = createHttpLink({
  uri: "/graphql",
=======
import { InventoryDashboard } from "./pages/inventoryDashboard";
import { ItemDashboard } from "./pages/itemDashboard";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
>>>>>>> origin
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
<<<<<<< HEAD

=======
>>>>>>> origin
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : " ",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          {/* <Header /> */}
          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

<<<<<<< HEAD
            <Route exact path="/product">
              <Product />
            </Route>

=======
            <Route exact path="/inventory-dashboard">
              <InventoryDashboard />
            </Route>

            <Route exact path="/item-dashboard">
              <ItemDashboard />
            </Route>
>>>>>>> origin
            {/* Define a route that will take in variable data */}
            <Route exact path="/profiles/:profileId">
              {/* <Profile /> */}
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
