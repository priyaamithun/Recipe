import React from "react";
import "./Header.css";
import Nav from "./Nav";
import Form from './Form';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
            <Nav/>

      <div className="logo">
      <img src={require("./Images/logo.png")} alt=""/>
      </div>
            <h5>Look! Cook! Enjoy!</h5>
        </div>
    );
  }
}

export default Header;
