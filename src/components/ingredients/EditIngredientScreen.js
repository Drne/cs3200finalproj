import {Link, useHistory, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, CircularProgress, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useGetIngredient from "../../hooks/ingredients/useGetIngredient";
import useCreateIngredient from "../../hooks/ingredients/useCreateIngredient";
import useEditIngredient from "../../hooks/ingredients/useEditIngredient";
import useDeleteIngredient from "../../hooks/ingredients/useDeleteIngredient";
import useGetRecipes from "../../hooks/recipes/useGetRecipes";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function EditIngredientScreen() {

    let query = useQuery();
    let history = useHistory();

    const {ingredient, getIngredient, isLoading, setIsLoading} = useGetIngredient()
    const createIngredient = useCreateIngredient()
    const editIngredient = useEditIngredient()
    const deleteIngredient = useDeleteIngredient()

    const recipes = useGetRecipes()

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()
    const [unit, setUnit] = useState()
    const [recipeId, setRecipeId] = useState(1)


    useEffect(() => {
        if (query.get("id")) {
            getIngredient(query.get("id"))

        } else {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        if (ingredient) {
            setAmount(ingredient.amount)
            setRecipeId(ingredient.recipe_id)
            setUnit(ingredient.unit)
            setDescription(ingredient.description)
        }
    }, [ingredient])

    function handleDelete() {
        deleteIngredient(query.get('id')).then(() => history.push('/ingredients'))
    }

    function handleButtonClick() {
        // Edit
        if (query.get('id')) {
            editIngredient({
                id: parseInt(query.get('id')),
                amount,
                recipeId: recipeId,
                unit: unit,
                description: description
            })
        } else { //create
            createIngredient({
                amount,
                recipeId: recipeId,
                unit: unit,
                description: description
            })
        }
    }

    return (
        <>
            {!isLoading ?
                <Paper elevation={3} style={{padding: '50px', margin: '50px'}}>
                    <Link to="/ingredients">
                        <Button variant="contained" startIcon={<ArrowBackIcon/>}
                                style={{position: 'absolute', top: '105px', left: '55px'}}>
                            Back to Ingredient List
                        </Button>
                    </Link>
                    {query.get('id') ? <Link to={"/recipes/edit?id=" + recipeId}>
                        <Button variant="contained" startIcon={<ArrowUpwardIcon/>}
                                style={{position: 'absolute', top: '105px', right: '55px'}}>
                            Edit Recipe
                        </Button>
                    </Link> : ''}

                    <Typography variant="h3" component="h2" style={{padding: '5px', flex: 1}}>
                        {query.get("id") ? "Edit" : "Create"} Ingredient
                    </Typography>
                    <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={
                        (event) => setDescription(event.target.value)
                    } fullWidth={true}/>
                    <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={
                        (event) => setAmount(parseFloat(event.target.value))
                    } fullWidth={true}/>
                    <TextField id="outlined-basic" label="Unit" variant="outlined" value={unit} onChange={
                        (event) => setUnit(event.target.value)
                    } fullWidth={true}/>

                    {recipes[0] ? <TextField variant="outlined" fullWidth select value={recipeId} label="Recipe"
                                             onChange={(event) => setRecipeId(event.target.value)}>
                        {recipes.map((recipe) =>
                            <MenuItem value={parseInt(recipe.id)}>
                                {recipe.name}
                            </MenuItem>)}
                    </TextField> : ''}

                    <div>
                        <Button variant="contained" color="primary" onClick={() => handleButtonClick()}>
                            {query.get("id") ? "Update" : "Create"}
                        </Button>
                        {query.get('id') ?
                            <Button onClick={() => handleDelete()}>
                                Delete
                            </Button> : ''}
                    < /div>
                </Paper> : <CircularProgress/>}
        </>
    )
}