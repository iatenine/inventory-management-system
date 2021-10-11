import React from "react";
import Login from "./login";
import Register from "./register";

export const Home: React.FC = () => {
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
