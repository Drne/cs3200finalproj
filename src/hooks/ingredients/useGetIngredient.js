import axios from 'axios'
import {useState} from "react";

export default function useGetIngredient() {
    let [ingredient, setIngredient] = useState([])
    const [loading, setLoading] = useState(true)

    function getIngredient(id) {
        setLoading(true)
        axios.get(`http://127.0.0.1:5000/api/ingredients`, {params: {id: id}})
            .then(res => {
                if (res.data) {
                    setIngredient(res.data)
                    setLoading(false)
                }
            })
    }

    return {ingredient, setIngredient, getIngredient, isLoading: loading, setIsLoading: setLoading}
}

