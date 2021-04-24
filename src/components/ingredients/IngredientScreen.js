import {Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import IngredientList from "./IngredientList";

export default function IngredientScreen() {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Typography variant="h5" component="h2" style={{padding: '5px', flex: 1}}>
                    Ingredients
                </Typography>
                <Link to="/ingredients/edit">
                    <Button size="small">Create</Button>
                </Link>
            </div>
            <IngredientList/>
        </>
    )
}