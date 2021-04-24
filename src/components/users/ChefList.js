import useGetUsers from "../../hooks/user/useGetUsers";
import User from "./User";


export default function ChefList() {

    let users = useGetUsers('chefs')

    return (
        <div style={{'display': 'flex', margin: '0 0 3px 0', flexWrap: 'wrap'}}>

            {users.map((user) => {
                return (
                    <User type="Chef" id={user.id} email={user.email} first_name={user.first_name}
                          last_name={user.last_name}
                          password={user.password} username={user.username} specialty={user.cuisine_specialty}
                    />
                );
            })}
        </div>

    )
}