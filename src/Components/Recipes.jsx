import React from "react";
import "./Recipes.css";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      { props.recipes && props.recipes.map((val,i)=> {
          return (
            <div key={i} className="card col-md-3">
              <img
                src={val.recipe.image}
                className="card-img-top"
                alt={val.recipe.label}
              />

              <h5 className="card-title">
                {val.recipe.label.length < 20
                  ? `${val.recipe.label}`
                  : `${val.recipe.label.substring(0, 25)}...`}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {val.recipe.source}
              </h6>
              <button className="btn btn-secondary">
                <Link className="link"
                  to={{
                    pathname: `/recipe/${val.recipe.label}`,
                    state: { recipe:val.recipe.label }
                  }}
                >
                  Full Preparation
                </Link>
              </button>
            </div>
          );
        })}
    </div>
  </div>
);

export default Recipes;
