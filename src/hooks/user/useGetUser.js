import axios from 'axios'
import {useState} from "react";

export default function useGetUser() {
    let [user, setUser] = useState([])
    let [userType, setUserType] = useState()
    const [loading, setLoading] = useState(true)

    function getUser(id) {
        setLoading(true)
        axios.get(`http://127.0.0.1:5000/api/chefs`, {params: {id: id}})
            .then(res => {
                if (res.data.id) {
                    setUserType('Chef')
                    setUser(res.data)
                    setLoading(false)
                } else {
                    axios.get(`http://127.0.0.1:5000/api/customers`, {params: {id: id}})
                        .then(res => {
                            if (res.data) {
                                setUserType('Customer')
                                setUser(res.data)
                                setLoading(false)
                            }
                        })
                }
            })
    }

    return {user, userType, getUser, isLoading: loading, setIsLoading: setLoading}
}

