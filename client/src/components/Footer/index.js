import React from "react";
// Import React Router Link component for internal hyperlinks

const homepageFooter = () => (
  <div className="bottom-style">
    <div id="box2">
      <div>
        <a
          target="blank"
          href="https://github.com/iatenine/inventory-management-system"
        >
          Repo Link
        </a>
      </div>
    </div>
    <div id="box3">
      <div>
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
export default homepageFooter;
