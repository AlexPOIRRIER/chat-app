import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './Contact.css';



class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            online :props.online
        }
    }
    render() {
        return (
            <figure className="Contact">
                <img src={this.props.avatar} alt="avatar" className="avatar" />
                <div>
                    <figcaption className="name">{this.props.name}</figcaption>
                    <div 
                    className="status"
                    onClick = {event =>{
                        const status = !this.state.online;
                        this.setState({online: status});
                    }}
                    >
                        <div className={this.state.online ? "status-online" : "status-offline"} />
                        <span className="status-text">{this.state.online ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </figure>
        )
    }
}
Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;