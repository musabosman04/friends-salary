import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const sidebar = props.sidebar
    let total = 0;
    for (let i = 0; i < sidebar.length; i++) {
        const user = sidebar[i];
        total = total + user.salary;
    }
    return (
        <div className="sidebar-container">
            <h2>This is Sidebar</h2>
            <h3>Total friends: {sidebar.length}</h3>
            <h3>Total salary: {total}</h3>
        </div>
    );
};

export default Sidebar;