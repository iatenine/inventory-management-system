import React from "react";
import { Blank } from "Blank";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Boilerplate
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/">
              <Home />
            </Route>
            {/* Define a route that will take in variable data */}
            <Route exact path="/profiles/:profileId">
              <Profile />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
