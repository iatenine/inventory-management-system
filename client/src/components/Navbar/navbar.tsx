// import React from "react";

interface NavbarProps {
  loggedIn: boolean;
  logout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ loggedIn, logout }) => {
  return (
    <nav className="navbar woodBackground whiteText">
      <button className="nav-button">View Inventories</button>
      <button className="nav-button">View Items</button>
      {loggedIn ? (
        <button className="nav-button" onClick={logout}>
          Logout
        </button>
      ) : (
        // Login button needs to use react-router-dom's Link component to navigate to the login page
        <button className="nav-button">Login</button>
      )}
    </nav>
  );
};

export default Navbar;
