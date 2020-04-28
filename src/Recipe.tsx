import React from "react";

interface RecipeProps {
    key: number
    title: string;
    ingredients: string;
    thumbnail: string;
}

const Recipe: React.FC<RecipeProps> = ({
    title,
    ingredients,
    thumbnail
}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src={thumbnail} alt="Thumbnails"/>
        </div>
    )
}

export default Recipe;