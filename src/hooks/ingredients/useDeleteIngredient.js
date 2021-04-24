import axios from 'axios'

export default function useDeleteIngredient() {

    function deleteIngredient(id) {
        // delete ingredient
        return axios.delete(`http://127.0.0.1:5000/api/ingredients`, {data: {id}})

    }

    return deleteIngredient
}
