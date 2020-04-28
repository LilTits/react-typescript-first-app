import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"
import Counter from "./Counter"
import './App.css';

const App = () => {

  const query = `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`

  const [recipes, setRecipes] = useState<React.DependencyList | never>([]);
  
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
    <div className="App">
      <form className="search-form">
        <input className="search-input" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={recipe.title} ingredients={recipe.ingredients} thumbnail={recipe.thumbnail}/>
      ))}
      <div>
        <Counter>
          {(count, setCount) => (
            <div>
              {count}
              <button onClick={() => setCount(count+1)}>+</button>
            </div>
          )}
        </Counter>
      </div>
    </div>
  )
}

export default App;
