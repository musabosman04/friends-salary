import React, { useState } from 'react';
import './Friend.css';
import userData from '../../userData';
import Person from '../Person/Person';
import Sidebar from '../Sidebar/Sidebar';

const Friend = () => {
    const [user, setUser] = useState(userData)
    const [sidebar, setSidebar] = useState([])

    const handelAddButton = (user) => {
        console.log(user)
        const newSidebar = [...sidebar, user]
        setSidebar(newSidebar)
    }
    return (
        <div className="friend-container">
            <div className="left"></div>
            <div className="center">
                {
                    user.map(user => <Person handelAddButton={handelAddButton} user={user}></Person>)
                }
            </div>
            <div className="right"> <Sidebar sidebar={sidebar}></Sidebar> </div>
        </div>
    );
};

export default Friend;