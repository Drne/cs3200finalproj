import axios from 'axios'
import {useEffect, useState} from "react";

export default function useGetUsers(userType) {
    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/api/` + userType)
            .then(res => {
                setUsers(res.data)
            })
    }, [])

    return users
}

