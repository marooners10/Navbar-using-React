import React, { Component } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <nav>
          <img className="logo" src={require("./pic/logo.jpg")} />
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "navbar"}
            >
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <FaTwitterSquare className="twitter" />
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={() => this.handleClick()}>
            <a href="#" className={this.state.clicked ? "active" : ""}>
              {this.state.clicked ? (
                <FaTimes style={{ color: "black" }} />
              ) : (
                <GiHamburgerMenu style={{ color: "black" }} />
              )}
            </a>
            {/* <a href="#"><GiHamburgerMenu style={{ color: 'white' }}/></a>
        <a href="#"><FaTimes style={{ color: 'white' }}/></a> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
