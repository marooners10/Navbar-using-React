import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";


const Web = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid" 
        heroImg={require("./pic/bc.jpg")}
        title="Web Hosting"
        // text="Choose Your Journey Wisely"
        // btnText="Design Plan"
        // url="#"
        btnClass="hide"
      />
    </div>
  );
};

export default Web;
