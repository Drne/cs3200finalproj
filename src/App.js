import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import UserScreen from "./components/users/UserScreen";
import EditUserScreen from "./components/users/EditUserScreen";
import RecipeScreen from "./components/recipes/RecipeScreen";
import EditRecipeScreen from "./components/recipes/EditRecipeScreen";
import IngredientScreen from "./components/ingredients/IngredientScreen";
import EditIngredientScreen from "./components/ingredients/EditIngredientScreen";
import NavBar from "./components/AppBar";

function App() {

    return (
        <div className="App">
            <Router>
                <NavBar/>

                <Switch>
                    <Route path="/recipes" exact>
                        <RecipeScreen/>
                    </Route>
                    <Route path="/recipes/edit">
                        <EditRecipeScreen/>
                    </Route>
                    <Route path="/users" exact>
                        <UserScreen/>
                    </Route>
                    <Route path="/users/edit">
                        <EditUserScreen/>
                    </Route>
                    <Route path="/ingredients" exact>
                        <IngredientScreen/>
                    </Route>
                    <Route path="/ingredients/edit">
                        < EditIngredientScreen/>
                    </Route>
                    <Route path="/">
                        <Redirect to="/users"/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
