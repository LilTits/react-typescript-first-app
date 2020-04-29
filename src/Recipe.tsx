import React from "react";

interface RecipeProps {
    key: number
    title: string;
    link: string;
    ingredients: string;
    thumbnail: string;
}

const Recipe: React.FC<RecipeProps> = ({
    title,
    ingredients,
    thumbnail,
    link
}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src={thumbnail} alt="Thumbnails"/>
            <div>
                <a href={link}>Link to the recipe</a>
            </div>
        </div>
    )
}

export default Recipe;