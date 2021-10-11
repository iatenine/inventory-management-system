// import React from "react";
// Import React Router Link component for internal hyperlinks
//import Navbar from "../Navbar";

const homepageFooter = () => {
  const NavProps = {
    loggedIn: true,
    logout: () => {
      console.log("Logout placeholder function");
    },
  };

  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div>
        <div className="bottom-style gearBackground styleText">
          <div id="box2">
            <div>
              <a
                target="no_blank"
                href="https://github.com/iatenine/inventory-management-system"
              >
                <span className="hiWhite">Repo Link</span>
              </a>
            </div>
          </div>
          <div id="box3">
            <div>
              <a
                target="no_blank"
                href="https://inventory-management-system-0.herokuapp.com"
              >
                <span className="hiWhite">Deploy Link</span>
              </a>
            </div>
          </div>

          <div id="box4">
            <div className="center-box">
              <div>
                <i className="far fa-copyright"></i>{" "}
                <span className="hiWhite">2021 Copyright: </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default homepageFooter;
