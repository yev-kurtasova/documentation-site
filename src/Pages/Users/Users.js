import { Link } from "react-router-dom";
import data from '../../data/users.json'
import ModalWindow from '../../components/ModalWindow/ModalWindow'
import { useEffect, useState } from "react";

export const Users = () => {

    // const [users, setUser] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //       .then(response => response.json())
    //       .then(data => setUser(data))
    //   }, [])

    const [users, setUsers] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [currentId, setCurrentId] = useState('');

    const removeUser = (id) => {
        setIsOpen(true);
        setCurrentId(id);
    }


    return (
        <div className="Main">
            {isOpen && 
            <ModalWindow 
            onDestroy={() => setIsOpen(false)}
            currentUserId={currentId}
            users={users}
            onDeleteUserFromData={setUsers}
            
            />}
            <h1>Users</h1>
            <ul>
                {users.map(user => {
                    return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link>
                    <i 
                   onClick={() => removeUser(user.id)} style={{paddingLeft: '20px'}}>X</i>
                    </li>

                })}
            </ul>
        </div>
    )
}