import React from "react";
// Import React Router Link component for internal hyperlinks
import {} from "react-router-dom";

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
