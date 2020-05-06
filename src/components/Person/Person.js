import React from 'react';
import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Person = (props) => {
    const { name, img, email, website, phone, salary, } = props.user;
    return (
        <div className="person-container">
            <div className="img-wrap">
                <img src={img} alt="" />
            </div>
            <div className="content-wrap">
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{salary}</p>
                <p>{website}</p>
                <button className="add-button" onClick={() => props.handelAddButton(props.user)}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Person;