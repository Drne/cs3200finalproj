import Recipe from "./recipe";
import useGetRecipes from "../../hooks/recipes/useGetRecipes";


export default function RecipeList({ chefId }) {

    let recipes = useGetRecipes(chefId)

    return (
        <div style={{'display': 'flex', margin: '0 0 3px 0', flexWrap: 'wrap'}}>

            {recipes.map((recipe) => {
                const authorName = recipe['authorObj.user.first_name'] + ' ' + recipe['authorObj.user.last_name']
                return (
                    <Recipe id={recipe.id} name={recipe.name}
                            authorID={recipe.authorID} authorName={authorName} cuisine={recipe.cuisine}/>
                );
            })}
        </div>

    )
}