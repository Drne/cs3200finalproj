import axios from 'axios'
import {useEffect, useState} from "react";

export default function useGetRecipes(chefId) {
    let [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/recipes`, {params: {chefId: chefId}})
            .then(res => {
                if (res.data) {
                    setRecipes(res.data)
                }
            })
    }, [])

    return recipes
}

