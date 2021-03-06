import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "./utils/auth";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { InventoryDashboard } from "./pages/inventoryDashboard";
import { ItemDashboard } from "./pages/itemDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddInventory from "./pages/addInventory";
import AddItem from "./pages/addItem";
import UpdateItem from "./pages/updateItem";
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/graphql"
      : "https://inventory-management-system-0.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : " ",
    },
  };
});

const link = ApolloLink.from([errorLink, httpLink])

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              {!Auth.loggedIn() ? <Home /> : <InventoryDashboard />}
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

            <Route exact path="/update-item/:itemId">
              <UpdateItem />
            </Route>

            <Route exact path="/inventory/:inventoryId">
              <ItemDashboard />
            </Route>

            <Route exact path="/addItem/:inventoryId">
              <AddItem />
            </Route>
          </div>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
