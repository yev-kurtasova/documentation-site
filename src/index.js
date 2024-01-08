import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import './global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
            <Header />
            <Sidebar />
            <Welcome />
    </div>
);

