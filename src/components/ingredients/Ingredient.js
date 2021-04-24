import Card from '@material-ui/core/Card';
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Ingredient({id, amount, description, unit}) {
    const editLink = "/ingredients/edit?id=" + id
    return (
        <Card variant="outlined" style={{margin: '2px'}}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {description}
                </Typography>
                <Typography color="textSecondary">
                    {unit}
                </Typography>
                <Typography variant="h6" component="h2">
                    {amount}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={editLink}>
                    <Button size="small">Edit</Button>
                </Link>
            </CardActions>
        </Card>
    )
}