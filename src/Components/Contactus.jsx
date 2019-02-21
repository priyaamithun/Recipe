import React from 'react';
import './Contactus.css'

const Contactus = () =>(
<div className="contact-content" id="contact">
  <h1>Contact Us</h1>
<hr/> 
<form className="form-contentnew">
  <div className="form-group">
    
    <input type="email" className="form-control" placeholder="Email address" required/>
  </div>
  <div className="form-group">
    
    <input type="email" className="form-control" placeholder="Full name" required/>
  </div>
  <br/>
  <textarea  className="textarea" rows="4" cols="75" defaultValue="Your Message....."  required/>
<br/>
<br/>
  <button type="submit" className="btn btn-secondary">Submit</button>
</form> 
</div>

);

export default Contactus;