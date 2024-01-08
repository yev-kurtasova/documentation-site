import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to="/statehooks">Built-in React Hooks</Link>
                    </li>
                    <li>
                        <Link to="/community">Community</Link>
                    </li>
                    <li> 
                        <Link to="/resources">Resources</Link>
                    </li>   
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;