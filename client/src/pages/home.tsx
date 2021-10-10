import React from "react";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Cards from "../components/Card/card";

const item = {
  name: "Hello",
  quantity: 442,
  categories: ["Dairy", "Beverages"],
};

const NavProps = {
  loggedIn: true,
  logout: () => {
    console.log("Logout placeholder function");
  },
};

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Homepage!</h1>
      <Navbar {...NavProps} />
      {/* <Header />  */}

      {/* Pass item object to Cards component as props (tsx) */}
      <Cards {...item} />

      {/* <Cards props={item} /> */}
      {/* <Footer /> */}
    </div>
  );
};

// will work
export default Home;
