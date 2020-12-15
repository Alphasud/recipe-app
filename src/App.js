import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = '95764db6';
  const APP_KEY = '96678ff7dd546c949b6435b13bfddd66';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return (
    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button
          className="search-button"
          type="submit">
          Search
          </button>
      </form>

      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          title={recipe.recipe.label}
          originalRecipe={recipe.recipe.url}
          image={recipe.recipe.image}
          serving={recipe.recipe.yield}
          ingredients={recipe.recipe.ingredients}
          cuisine={recipe.recipe.dietLabels}
        />
      ))}
      
      </div>
      </div>
  );
}

export default App;
