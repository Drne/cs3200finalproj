import axios from 'axios'

export default function useEditIngredient() {

    function editIngredient(userData) {
        // edit ingredient
        axios.put(`http://127.0.0.1:5000/api/ingredients`, userData)
    }

    return editIngredient
}
