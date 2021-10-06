import React from "react";
// Import hooks from React Router
import {} from "react-router-dom";

const homepageHeader = () => (
  <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
      {/* Use Link component to create a link that returns to the homepage on click */}
      <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
        See your inventory
      </p>
    </div>
  </header>
);
export default homepageHeader;
