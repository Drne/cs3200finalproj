import axios from 'axios'

export default function useCreateIngredient() {

    function createIngredient(ingredientData) {
        // Enter ingredient
        axios.post(`http://127.0.0.1:5000/api/ingredients`, ingredientData)
    }

    return createIngredient
}
