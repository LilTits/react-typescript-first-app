import React from "react";

interface RecipeProps {
    title: string;
    ingredients: string;
    thumbnails?: string;
}

const Recipe: React.FC<RecipeProps> = ({
    title,
    ingredients,
    thumbnails
}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src={thumbnails} alt="Thumbnails"/>
        </div>
    )
}

export default Recipe;