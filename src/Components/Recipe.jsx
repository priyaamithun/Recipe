import React from "react";
import HttpMethod from "./HttpMethod";
import "./Recipe.css";
import { Link } from "react-router-dom";

const API_KEY = "6f5f6854a59d3e4ae90ddbbe12b0e899";
const APIID = "b85eeae5";
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${APIID}&app_key=${API_KEY}
      `
    );
    const res = await req.json();
    console.log(res);
    this.setState({
      activeRecipe: res.hits[0].recipe
    });
    console.log(this.state.activeRecipe);

  };
  render() {
    const recipe = this.state.activeRecipe;
    // const list = recipe.ingredientLines;
    console.log(recipe);
    console.log(recipe);

const listArray = [];
listArray.push(recipe);
const lists = listArray.map((m,i)=> 
  <li key ={i}>{m.ingredientLines}</li>
// )
)
    return (
      <div className="container">
       {this.state.activeRecipe.length !== 0 && 
       <div className="recipe-content">
       <h2 >{recipe.label}</h2>
        <img src={recipe.image} alt="" />
        <p>Source:{recipe.source}</p>

     <ul>{lists}
      
     </ul>
     <button className=" btn btn-warning home-btn">
     <Link className ="link" to="/">Go Home</Link>
     </button>
      </div>
      }
      </div>
    );
  }
}
export default Recipe;
