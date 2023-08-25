import React from "react";
import Navbar from "./Navbar";
import "./navbar.css"
import Hero from "./Hero";
const Home=(props)=>{
    return<div>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={require("./pic/bc.jpg")}
        title="Your Journey Your Story"
        text="Choose Your Journey Wisely"
        btnText="Design Plan"
        url="#"
        btnClass="show"
        />
        </div>
}

export default Home;