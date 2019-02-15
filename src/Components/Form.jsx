import React from "react";

import "./Form.css";

const Form = props => (
  <div id="wrap">
  <form className="form-wrapper" onSubmit={props.getRecipe}>
  <input id="search" name="recipeName" type="text" placeholder="Seach for recipe ?" />
<button><i className="fa fa-search"></i></button>
  </form>
  </div>
);

export default Form;
