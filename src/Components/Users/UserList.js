import React from 'react'
import Card from '../UI/Card'
import './UserList.css'

const UserList = (props) => {

    return <Card className="users">
        <ul>
            {props.userData.map(user =>
                <li key={user.id}>
                    {user.username}({user.age}years old)
                </li>
            )}
        </ul>


    </Card>

}

export default UserList