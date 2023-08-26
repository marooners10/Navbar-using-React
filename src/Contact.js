import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("./pic/bc.jpg")}
        title="Contact"
        btnClass="hide"
      />
    </div>
  );
};

export default Contact;
