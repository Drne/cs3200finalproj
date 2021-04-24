import useGetUsers from "../../hooks/user/useGetUsers";
import User from "./User";


export default function CustomerList() {

    let users = useGetUsers('customers')

    return (
        <div style={{'display': 'flex', margin: '0 0 3px 0', flexWrap: 'wrap'}}>

            {users.map((user) => {
                return (
                    <User type="Customer" id={user.id} email={user.email} first_name={user.first_name}
                          last_name={user.last_name}
                          password={user.password} username={user.username}/>
                );
            })}
        </div>

    )
}