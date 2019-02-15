import React from 'react';
import './Aboutus.css';


const Aboutus = () =>(
<div className="Aboutus-content" id="about">
    <h1>About Us</h1>
    <hr/>
<div className="logoAboutUs">
<img src={require("./Images/logo.png")} alt=""/>

</div>
<p>Hey Foodie....i'm CookBookList, dedicated to today's passionate food lover. 
    Here you can get all type of food along with nutrients and other indgredients as well</p>


</div>
);

export default Aboutus;