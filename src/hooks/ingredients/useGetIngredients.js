import axios from 'axios'
import {useEffect, useState} from "react";

export default function useGetIngredients(recipeId) {
    let [ingredients, setIngredients] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/ingredients`, {params: {recipeId: recipeId}})
            .then(res => {
                setIngredients(res.data)
            })
    }, [])

    return ingredients
}

