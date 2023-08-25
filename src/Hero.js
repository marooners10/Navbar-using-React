import React from "react";
import "./hero.css";
const Hero=(props)=>{
    return<div>
        <div className={props.cName}> 
        {/* props to make dynamic */}
        <img alt="Background Image" src={props.heroImg}/>
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
        </div>
        </div>
        </div>
}

export default Hero;