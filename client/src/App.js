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
import { InventoryDashboard } from "./pages/inventoryDashboard";
import { ItemDashboard } from "./pages/itemDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddInventory from "./pages/addInventory";

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/graphql"
      : "https://inventory-management-system-0.herokuapp.com/graphql",
});

const NavProps = {
  loggedIn: true,
  logout: () => {
    console.log("Logout placeholder function");
  },
};

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
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
      <Header />
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

            <Route exact path="/inventory-dashboard">
              <InventoryDashboard />
            </Route>

            <Route exact path="/add-inventory">
              <AddInventory />
            </Route>

            <Route exact path="/inventory/:inventoryId">
              <ItemDashboard />
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
        <Navbar {...NavProps} />
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
