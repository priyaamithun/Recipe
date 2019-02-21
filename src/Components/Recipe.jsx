import React from "react";
import HttpHeader from './HttpHeader';
import "./Recipe.css";
import { Link } from "react-router-dom";
import Footer from './Footer';


const API_KEY = "6f5f6854a59d3e4ae90ddbbe12b0e899";
const APIID = "b85eeae5";
class Recipe extends React.Component {
  
  state = {
    activeRecipe: [],
    lists : []
  };

  async doRequest(url,
    content, 
    contentType= this.defaultContentType){
  let options = new HttpHeader();
  // options.method = HttpMethod;
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
      activeRecipe: res.hits[0].recipe,
      lists : res.hits[0].recipe.ingredients
    });
    // console.log(this.state.activeRecipe);

  };

  render() {
    const recipe = this.state.activeRecipe;
  
   const ingredientsList = this.state.lists.map((d, key)=>{
     return (
       <li key={key}>{d.text}</li>
     )
   })



    return (
      <div className="page">
    
      <div className="container recipeContainer">
       {this.state.activeRecipe.length !== 0 && 
       <div className="recipe-content">
       <h2 className="recipe-title">{recipe.label}</h2>
        <img src={recipe.image} alt="" />

        <p className="source">Source:{recipe.source}</p>

     <ul className="ingredientsList">
     <p className="ingredients">Ingredients</p>
<br/>
      {ingredientsList}
     </ul>
     <button className=" btn btn-warning home-btn">
     <Link className ="link" to="/">Go Home</Link>
     </button>
    

      </div>
      }
      </div>
      <Footer />
      </div>
    );
  }
}
export default Recipe;
