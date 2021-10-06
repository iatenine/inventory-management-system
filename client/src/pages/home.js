import React from "react";
import "./home.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Grid from "react-css-grid";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export const Home = () => {
  return (
    <div>
      <h1>Homepage!</h1>
      <h3>in-progress</h3>
    </div>
  );
};

const homepageHeader = (props) => (
  <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      {/* Use Link component to create a link that returns to the homepage on click */}
      <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
        See your inventory
      </p>
    </div>
  </header>
);

const homepageFooter = (props) => (
  <div className="bottom-style">
    <div id="box1">
      <div>
        <div className="bottom-title">TADA</div>
        <div className="bottom-contents"></div>
      </div>
    </div>

    <div id="box2">
      <div>
        <div className="bottom-title">Github</div>
        <a
          target="_blank"
          href="https://github.com/iatenine/inventory-management-system"
        >
          Repo Link
        </a>
      </div>
    </div>
    <div id="box3">
      <div>
        <div className="bottom-title">Heroku</div>
        <a href="https://SOMETHING.herokuapp.com">Deploy Link</a>
      </div>
    </div>

    <div id="box4">
      <div className="center-box">
        <div>
          <footer>
            <i className="far fa-copyright"></i> 2019 Copyright:{" "}
          </footer>
        </div>
      </div>
    </div>
  </div>
);

// will work
export default Home;
