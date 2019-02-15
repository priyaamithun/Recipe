import React from "react";
import "./Nav.css";
import Form from "./Form";
import { Link } from "react-router-dom";

class Nav extends React.Component {


  render() {
    return (
    
      <div className="Nav">
      
      <h3>CookBookList</h3>      
  
      <ul className="Menu-list">
        <li><a href="#home">Homes</a></li>
    <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    
    
      </div>
    
    );
  }
}

export default Nav;