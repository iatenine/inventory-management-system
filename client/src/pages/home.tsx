import React from "react";
import Login from "./login";
import Register from "./register";

export const Home: React.FC = () => {
  return (
    <div>
      <div className="column">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

// will work
export default Home;
