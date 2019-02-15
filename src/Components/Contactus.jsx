import React from 'react';
import './Contactus.css'

const Contactus = () =>(
<div className="contact-content" id="contact">
  <h1>Contact Us</h1>
  <hr/>
<form className="form-contentnew">
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control"/>
  </div>
  <div className="form-group">
    <label>Full Name:</label>
    <input type="email" className="form-control"/>
  </div>
  <br/>
  <textarea  className="textarea" rows="4" cols="75" defaultValue="Your Message....." />
<br/>
<br/>
  <button type="submit" className="btn btn-secondary">Submit</button>
</form> 
</div>

);

export default Contactus;