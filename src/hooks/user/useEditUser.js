import axios from 'axios'

export default function useEditUser() {

    function editUser(userType, userData) {
        // edit user
        axios.put(`http://127.0.0.1:5000/api/users`, userData).then(() => {
            //edit customer or chef
            if (userType === 'Chef') {
                axios.put(`http://127.0.0.1:5000/api/chefs`, {...userData})
            } else {
                axios.put(`http://127.0.0.1:5000/api/customers`, {...userData})
            }
        })

    }

    return editUser
}
