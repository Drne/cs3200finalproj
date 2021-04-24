import Card from '@material-ui/core/Card';
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function User({type, id, email, first_name, last_name, username, password, specialty}) {
    const editLink = "/users/edit?id=" + id
    return (
        <Card variant="outlined" style={{margin: '2px'}}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {type}
                </Typography>
                <Typography variant="h5" component="h2">
                    {first_name} {last_name}
                </Typography>
                <Typography color="textSecondary">
                    {username} - {email}
                </Typography>
                <Typography variant="h6" component="h2">
                    {specialty ? specialty : ''}
                </Typography>
                <Typography variant="body2" component="p">
                    Super secret password: {password}
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