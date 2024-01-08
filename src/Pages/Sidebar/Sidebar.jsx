import './Sidebar.css';

function Sidebar(){
    return(
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="/statehooks">Built-in React Hooks</a>
                    </li>
                    <li>
                        <a href="/community">Community</a>
                    </li>
                    <li> 
                        <a href="/resources">Resources</a>
                    </li>   
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/users">Users</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;