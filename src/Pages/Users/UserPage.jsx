import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './Main.css';

export default function UserPage() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    const user = useLoaderData();

    return (
        <div className="Main user-page">
            <div>
                <Link to="/users">Back</Link>
            </div>

            {users.map(user => {

                return (
                    <div>
                        <h2>User: {user.name}</h2>
                        <ul>
                        <li>Username: {user.username}</li>
                        <li>Phone: {user.phone}</li>
                        </ul>
                    </div>
                )
                // return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>

            })}


        </div>
    )
}
