import {Link, useHistory, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, CircularProgress, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import useGetRecipe from "../../hooks/recipes/useGetRecipe";
import useCreateRecipe from "../../hooks/recipes/useCreateRecipe";
import useEditRecipe from "../../hooks/recipes/useEditRecipe";
import useDeleteRecipe from "../../hooks/recipes/useDeleteRecipe";
import useGetUsers from "../../hooks/user/useGetUsers";
import IngredientList from "../ingredients/IngredientList";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function EditRecipeScreen() {

    let query = useQuery();
    let history = useHistory();

    const {recipe, getRecipe, isLoading, setIsLoading} = useGetRecipe()
    const createRecipe = useCreateRecipe()
    const editRecipe = useEditRecipe()
    const deleteRecipe = useDeleteRecipe()

    const chefs = useGetUsers('chefs')

    const [instructions, setInstructions] = useState()
    const [name, setName] = useState()
    const [authorID, setAuthorID] = useState()
    const [cuisine, setCuisine] = useState()


    useEffect(() => {
        if (query.get("id")) {
            getRecipe(query.get("id"))

        } else {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        setCuisine(recipe.cuisine)
        setAuthorID(recipe.author)
        setName(recipe.name)
        setInstructions(recipe.instructions)

    }, [recipe])

    function handleDelete() {
        deleteRecipe(query.get('id')).then(() => history.push('/recipes'))
    }

    function handleButtonClick() {
        // Edit
        if (query.get('id')) {
            editRecipe({
                id: parseInt(query.get('id')),
                name,
                instructions,
                author: authorID,
                cuisine
            })
        } else { //create
            createRecipe({
                name,
                instructions,
                author: authorID,
                cuisine
            })
        }
    }

    return (
        <>
            {!isLoading ?
                <Paper elevation={3} style={{padding: '50px', margin: '50px'}}>
                    <Link to="/recipes">
                        <Button variant="contained" startIcon={<ArrowBackIcon/>}
                                style={{position: 'absolute', top: '105px', left: '55px'}}>
                            Back to Recipe List
                        </Button>
                    </Link>
                    {query.get('id') ? <Link to={"/users/edit?id=" + authorID}>
                        <Button variant="contained" startIcon={<ArrowUpwardIcon/>}
                                style={{position: 'absolute', top: '105px', right: '55px'}}>
                            Edit Chef
                        </Button>
                    </Link> : ''}
                    <Typography variant="h3" component="h2" style={{padding: '5px', flex: 1}}>
                        {query.get("id") ? "Edit" : "Create"} Recipe
                    </Typography>
                    <div style={{marginBottom: '5px', display: 'flex'}}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={
                            (event) => setName(event.target.value)
                        } fullWidth={true}/>
                    </div>
                    <TextField id="outlined-basic" label="Instructions" variant="outlined" value={instructions}
                               onChange={
                                   (event) => setInstructions(event.target.value)
                               } fullWidth={true}/>

                    <TextField variant="outlined" fullWidth select value={cuisine} label="Cuisine"
                               onChange={(event) => setCuisine(event.target.value)}>
                        <MenuItem value="AMERICAN">
                            American
                        </MenuItem>
                        <MenuItem value="CHINESE">
                            Chinese
                        </MenuItem>
                    </TextField>
                    <TextField variant="outlined" fullWidth select value={authorID} label="Author"
                               onChange={(event) => setAuthorID(event.target.value)}>
                        {chefs.map((chef) =>
                            <MenuItem value={chef.id}>
                                {chef.first_name + ' ' + chef.last_name}
                            </MenuItem>)}
                    </TextField>
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
            <Paper elevation={3} style={{padding: '10px', margin: '50px'}}>
                <Typography variant="h5" component="h2" style={{flex: 1}}>
                    Ingredients
                </Typography>
                <IngredientList recipeId={query.get('id')}/>
            </Paper>
        </>
    )
}