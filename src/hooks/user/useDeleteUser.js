import axios from 'axios'

export default function useDeleteUser() {

    function deleteUser(userType, id) {
        // Enter user
        return axios.delete(`http://127.0.0.1:5000/api/users`, {data: {id}})

    }

    return deleteUser
}
