import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const query = `http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3`

  
  useEffect(() => {
    get_recipes()
  })

  const get_recipes = async () => {
    const resp = await fetch(query);
    const data = await resp.json();
    console.log(data)
  }

  return(
    <div className="className">
      <form className="search-form">
        <input className="search-input" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default App;
