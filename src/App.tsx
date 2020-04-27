import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"
import './App.css';

const App = () => {

  const query = `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    get_recipes()
  }, [])

  const get_recipes = async () => {
    const resp = await fetch(query);
    const data = await resp.json();
    setRecipes(data.results)
    console.log(data.results)
  }

  return(
    <div className="className">
      <form className="search-form">
        <input className="search-input" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={"title"} ingredients="Curry" thumbnails="http://img.recipepuppy.com/560556.jpg"/>
      ))}
    </div>
  )
}

export default App;
