import Card from '@material-ui/core/Card';
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function Recipe({id, instructions, name, authorName, cuisine}) {
    const editLink = "/recipes/edit?id=" + id
    return (
        <Card variant="outlined" style={{margin: '2px'}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {cuisine}
                </Typography>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color="textSecondary">
                    by {authorName}
                </Typography>
                <Typography variant="h6" component="h2">
                    {instructions}
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