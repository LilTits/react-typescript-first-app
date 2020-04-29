import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe"
import Counter from "./Counter"
import './App.css';

const App = () => {

  const myRecipe = "cookie"
  const myIngredients = [
    ""
  ]

  const query = `http://www.recipepuppy.com/api/?i=${myIngredients}&q=${myRecipe}`

  const [recipes, setRecipes] = useState<React.DependencyList | never>([]);
  // const [search, setSearch] = useState('');
  
  useEffect(() => {
    get_recipes()
  }, [])

  const get_recipes = async () => {
    const resp = await fetch(query);
    const data = await resp.json();
    setRecipes(data.results)
  }

  // const updateSearch = (e: Event) => {
  //   setSearch(e.target.value)
  // }

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.title} title={recipe.title} ingredients={recipe.ingredients} thumbnail={recipe.thumbnail}/>
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
