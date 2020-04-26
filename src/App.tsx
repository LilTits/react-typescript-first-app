import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const APP_ID = "a70194b6"
  const APP_KEY = "90cce5be20bee1f1f1c276272ded8158"

  const query = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    get_recipes_2()
  })

  //const get_recipes = () => {
  //  const resp = await fetch(query);
  //  const data = repsonse.json();
  //  console.log(data)
  //}

  const get_recipes_2 = () => {
    fetch(query).then(
      resp => {
        resp.json()
      }
    )
  }

  return(
    <div className="className">
      <form className="search-form">
        <input className="search-input" type="text"/>
        <button className="search-button" type="submit">
          {counter}
        </button>
      </form>
    </div>
  )
}

export default App;
