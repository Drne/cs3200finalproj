import axios from 'axios'
import {useState} from "react";

export default function useGetRecipe() {
    let [recipe, setRecipe] = useState([])
    const [loading, setLoading] = useState(true)

    function getRecipe(id) {
        setLoading(true)
        axios.get(`http://127.0.0.1:5000/api/recipes`, {params: {id: id}})
            .then(res => {
                if (res.data) {
                    setRecipe(res.data)
                    setLoading(false)
                }
            })
    }

    return {recipe, setRecipe, getRecipe, isLoading: loading, setIsLoading: setLoading}
}

