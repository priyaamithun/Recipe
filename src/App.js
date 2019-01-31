import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Recipes from './Components/Recipes';
import HttpMethod from './Components/HttpMethod';
import HttpHeader from './Components/HttpHeader';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Contactus from "./Components/Contactus";
import Aboutus from "./Components/Aboutus";



const API_KEY = "6f5f6854a59d3e4ae90ddbbe12b0e899";
const APIID = "b85eeae5";
class App extends React.Component {
  defaultContentType = 'application/json';


state = {
  recipes: []
};



async doRequest(url,
  content, 
  contentType= this.defaultContentType){
let options = new HttpHeader();
// options.method = HttpMethod;
  };
  getRecipe = async(e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APIID}&app_key=${API_KEY}
      &from=0&to=8`,HttpMethod.GET
    );
    
    console.log("Working!!!");
    const data = await api_call.json();
    this.setState({
      recipes: data.hits
      
    });
    console.log(this.state.recipes);

  };
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
componentDidUpdate =() =>{
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
}
  render() {
    return (
      <div className="app" id="home">
        <Header />
        <Form getRecipe={this.getRecipe} />
  <Recipes recipes={this.state.recipes} />
  
  <Aboutus />
  <Contactus/>
  <Footer />
      </div>
    );
  }

}


export default App;
