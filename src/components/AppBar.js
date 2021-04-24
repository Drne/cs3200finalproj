import {AppBar, Divider, Tab, Tabs} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";

export default function NavBar() {
    const location = useLocation()

    return (
        <>
            <AppBar position="static" style={{ background: '#2E3B55' }}/>
            <Tabs
                variant="fullWidth"
                value={location.pathname}
                aria-label="nav tabs example"
            >
                <Tab label="Users" component={Link} to="/users" value={"/users"}/>
                <Tab label="Recipes" component={Link} to="/recipes" value={"/recipes"} />
                <Tab label="Ingredients" component={Link} to="/ingredients" value={"/ingredients"}/>
            </Tabs>
            <Divider orientation="vertical" flexItem />
        </>
    )
}