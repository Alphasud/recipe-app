import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, serving, image, ingredients, originalRecipe, cuisine}) => {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <a className={style.link} href={originalRecipe} target="_blank" rel="noreferrer" >See original recipe</a>
            <img className={style.image} src={image} alt="Recipe" />
            <p>For {serving} person(s), {cuisine}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
