import React from 'react';
import './Contact.css';



function Contact(){
    return (
        <figure className="Contact">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="avatar" className="avatar"/>
            <div>
            <figcaption className="name">Dwayne Pierce</figcaption>
            <div className="status">
                <div className="status-online"/>
                <span className="status-text">Online</span>
                </div>
            </div>
        </figure>
    )
}

export default Contact;