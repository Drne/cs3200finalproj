import {Link, useLocation} from 'react-router-dom'
import {useEffect, useState} from "react";
import {Button, CircularProgress, MenuItem, Paper, TextField, Typography} from "@material-ui/core";
import useGetUser from "../../hooks/user/useGetUser";
import useCreateUser from "../../hooks/user/useCreateUser";
import useEditUser from "../../hooks/user/useEditUser";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useDeleteUser from "../../hooks/user/useDeleteUser";
import {useHistory} from "react-router-dom";
import RecipeList from "../recipes/recipeList";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function EditUserScreen() {

    let query = useQuery();
    let history = useHistory();

    const {user, userType: uType, getUser, isLoading, setIsLoading} = useGetUser()
    const createUser = useCreateUser()
    const editUser = useEditUser()
    const deleteUser = useDeleteUser()

    const [userType, setUserType] = useState('User')
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [cuisineSpecialty, setCuisineSpecialty] = useState(null)

    useEffect(() => {
        if (query.get("id")) {
            getUser(query.get("id"))

        } else {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        if (uType) {
            setUserType(uType)
        }

        setFirstName(user.first_name)
        setLastName(user.last_name)
        setUsername(user.username)
        setPassword(user.password)
        setEmail(user.email)
        if (userType === 'Chef') {
            setCuisineSpecialty(user.cuisine_specialty)
        }
    }, [user])

    function handleDelete() {
        deleteUser(userType, query.get('id')).then(() => history.push('/users'))
    }

    function handleButtonClick() {
        // Edit
        if (query.get('id')) {
            editUser(userType, {
                id: parseInt(query.get('id')),
                username,
                password,
                first_name: firstName,
                last_name: lastName,
                email,
                cuisineSpecialty: cuisineSpecialty
            })
        } else { //create
            createUser(userType, {
                username,
                password,
                first_name: firstName,
                last_name: lastName,
                email,
                cuisineSpecialty
            })
        }
    }

    return (
        <>
            {!isLoading ?
                <Paper elevation={3} style={{padding: '50px', margin: '50px'}}>
                    <Link to="/users">
                        <Button variant="contained" startIcon={<ArrowBackIcon/>}
                                style={{position: 'absolute', top: '105px', left: '55px'}}>
                            Back to User List
                        </Button>
                    </Link>
                    <Typography variant="h3" component="h2" style={{padding: '5px', flex: 1}}>
                        {query.get("id") ? "Edit" : "Create"} {userType}
                    </Typography>
                    {!query.get('id') ?
                        <TextField variant="outlined" fullWidth select value={userType}
                                   onChange={(event) => setUserType(event.target.value)}>
                            <MenuItem value="Customer">
                                Customer
                            </MenuItem>
                            <MenuItem value="Chef">
                                Chef
                            </MenuItem>
                        </TextField> : ''}
                    <div style={{marginBottom: '5px', display: 'flex'}}>
                        <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName}
                                   onChange={
                                       (event) => setFirstName(event.target.value)
                                   } fullWidth={true}/>
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={
                            (event) => setLastName(event.target.value)
                        } fullWidth={true}/>
                    </div>
                    <div style={{marginBottom: '5px', display: 'flex'}}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" value={username} onChange={
                            (event) => setUsername(event.target.value)
                        } fullWidth={true}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={
                            (event) => setPassword(event.target.value)
                        } fullWidth={true}/>
                    </div>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={
                        (event) => setEmail(event.target.value)
                    } fullWidth={true}/>
                    {userType === 'Chef' ?
                        <TextField variant="outlined" fullWidth select value={cuisineSpecialty}
                                   label="Cuisine Specialty"
                                   onChange={(event) => setCuisineSpecialty(event.target.value)}>
                            <MenuItem value="American">
                                American
                            </MenuItem>
                            <MenuItem value="Chinese">
                                Chinese
                            </MenuItem>
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
            {query.get('id') && uType === 'Chef' ? <Paper elevation={3} style={{padding: '10px', margin: '50px'}}>
                <Typography variant="h5" component="h2" style={{flex: 1}}>
                    Recipes
                </Typography>
                <RecipeList chefId={query.get('id')}/>
            </Paper> : ''}
        </>
    )
}