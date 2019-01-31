import React from "react";

import "./Form.css";

const Form = props => (
  <form className="form-wrapper" onSubmit={props.getRecipe}>
    <input type="text" name="recipeName" />
    <button className="btn btn-secondary btn-sm" >Search</button>
  </form>
);

export default Form;
