import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';



function Contact(props){
    return (
        <figure className="Contact">
            <img src={props.avatar} alt="avatar" className="avatar"/>
            <div>
    <figcaption className="name">{props.name}</figcaption>
            <div className="status">
                <div className={props.online ? "status-online" : "status-offline"}/>
                <span className="status-text">{props.online ? "Online" : "Offline"}</span>
                </div>
            </div>
        </figure>
    )
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;