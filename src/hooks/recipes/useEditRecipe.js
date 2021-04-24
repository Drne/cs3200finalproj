import axios from 'axios'

export default function useEditRecipe() {

    function editRecipe(userData) {
        // edit recipe
        axios.put(`http://127.0.0.1:5000/api/recipes`, userData)
    }

    return editRecipe
}
