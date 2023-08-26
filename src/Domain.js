import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";


const Domain = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid" 
        heroImg={require("./pic/bc.jpg")}
        title="Domain Name"
        // text="Choose Your Journey Wisely"
        // btnText="Design Plan"
        // url="#"
        btnClass="hide"
      />
    </div>
  );
};

export default Domain;
