import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  loggedIn: boolean;
  logout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ loggedIn, logout }) => {
  return (
    <nav className="navbar woodBackground whiteText">
      <Link to="/inventory-dashboard">
        <button className="nav-button">View Inventories</button>
      </Link>

      <Link to="/item-dashbaord">
        <button className="nav-button">View Items</button>
      </Link>

      {loggedIn ? (
        <Link to="/">
          <button className="nav-button" onClick={logout}>
            Logout
          </button>
        </Link>
      ) : (
        // Login button needs to use react-router-dom's Link component to navigate to the login page
        <Link to="/">
          <button className="nav-button">Login</button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
