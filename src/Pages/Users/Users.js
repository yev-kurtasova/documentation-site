import { Link } from "react-router-dom";
import data from '../../data/users.json'
import { useState } from "react";

export const Users = () => {
    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {data.map(user => {
                    return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>

                })}
            </ul>
        </div>
    )
}