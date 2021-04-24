import {Button, Typography} from "@material-ui/core";
import ChefList from "./ChefList";
import CustomerList from "./CustomerList";
import {Link} from "react-router-dom";

export default function UserScreen() {
    return (
        <>
            <div style={{display: 'flex'}}>
                <Typography variant="h5" component="h2" style={{padding: '5px', flex: 1}}>
                    Chefs
                </Typography>
                <Link to="/users/edit">
                    <Button size="small">Create</Button>
                </Link>
            </div>
            <ChefList/>
            <div style={{display: 'flex'}}>
                <Typography variant="h5" component="h2" style={{padding: '5px', flex: 1}}>
                    Customers
                </Typography>
                <Link to="/users/edit">
                    <Button size="small">Create</Button>
                </Link>
            </div>
            <CustomerList/>
        </>
    )
}