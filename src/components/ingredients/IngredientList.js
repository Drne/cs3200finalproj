import Ingredient from "./Ingredient";
import useGetIngredients from "../../hooks/ingredients/useGetIngredients";


export default function IngredientList({ recipeId }) {

    let ingredients = useGetIngredients(recipeId)

    return (
        <div style={{'display': 'flex', margin: '0 0 3px 0', flexWrap: 'wrap'}}>
            {ingredients.map((ingredient) => {
                return (
                    <Ingredient id={ingredient.id} amount={ingredient.amount} description={ingredient.description}
                                recipe_id={ingredient.recipe_id} unit={ingredient.unit}/>
                );
            })}
        </div>

    )
}