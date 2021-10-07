// this is the Root Page (contains the application/like main HB)
import React from "react";
// import { Blank } from "Blank";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
// to be used later -- dont forget to export
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
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
            {/* Define a route that will take in variable data */}
            <Route exact path="/profiles/:profileId">
              {/* <Profile /> */}
            </Route>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
