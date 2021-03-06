import React from "react";
import Login from "./login";
import Register from "./register";
import Auth from "../utils/auth";

export const Home: React.FC = () => {

  if(localStorage.getItem("id_token")) {
    window.location.assign("/inventory-dashboard")
  }

  return (
    <div className="woodBackground styleText">
      <div className="column">
        <div className="row">
          <Login />
          <br />
          <Register />
        </div>
      </div>
    </div>
  );
};

// will work
export default Home;
