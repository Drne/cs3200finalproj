import axios from 'axios'

export default function useCreateRecipe() {

    function createRecipe(userData) {
        // Enter recipe
        axios.post(`http://127.0.0.1:5000/api/recipes`, userData)
    }

    return createRecipe
}
