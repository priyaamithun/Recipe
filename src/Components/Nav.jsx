import React from "react";
import "./Nav.css";
import Form from "./Form";
import { Link } from "react-router-dom";


class Nav extends React.Component {
 
  render() {
    return (
    
      <div className="Navigation" >
      
      <h3>CookBookList</h3> 
      
      
      <input type="checkbox" id="nav-toggle" className="nav-toggle"/>    
      <label htmlFor="nav-toggle"  className="nav-toggle-label"  onClick={this.handleClick}>
      <span></span> 
    </label>
     
  <nav className="nav">
  
      <ul className="Menu-container">
        <li><a href="#home"><span>Homes</span></a></li>
    <li><a href="#about"><span>About Us</span></a></li>
        <li><a href="#contact"><span>Contact Us</span></a></li>
      </ul>
    </nav>
    
    
    
    
      </div>
    
    );
  }
}

export default Nav;