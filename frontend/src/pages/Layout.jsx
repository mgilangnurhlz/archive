import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/style.css';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <section style={{ marginTop: "5rem" }}>
        <main>{children}</main>
      </section>


      <Footer />
    </React.Fragment>
  );
};

export default Layout;