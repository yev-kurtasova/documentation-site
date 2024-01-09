import { Link } from "react-router-dom";
import data from '../../data/users.json'
import { useEffect, useState } from "react";

export const Users = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUser(data))
      }, [])

    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>

                })}
            </ul>
        </div>
    )
}