import {Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import RecipeList from "./recipeList";

export default function RecipeScreen() {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Typography variant="h5" component="h2" style={{padding: '5px', flex: 1}}>
                    Recipes
                </Typography>
                <Link to="/recipes/edit">
                    <Button size="small">Create</Button>
                </Link>
            </div>
            <RecipeList/>
        </>
    )
}