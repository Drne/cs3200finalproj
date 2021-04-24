import axios from 'axios'

export default function useDeleteRecipe() {

    function deleteRecipe(id) {
        // delete recipe
        return axios.delete(`http://127.0.0.1:5000/api/recipes`, {data: {id}})

    }

    return deleteRecipe
}
