import axios from 'axios'

export default function useCreateUser() {

    function createUser(userType, userData) {
        // Enter user
        axios.post(`http://127.0.0.1:5000/api/users`, userData).then(res => {
            const data = res.data
            let id = data.id

            //Enter customer or chef
            if (userType === 'Chef') {
                axios.post(`http://127.0.0.1:5000/api/chefs`, {id, ...userData})
            } else {
                axios.post(`http://127.0.0.1:5000/api/customers`, {id})
            }
        })

    }

    return createUser
}
