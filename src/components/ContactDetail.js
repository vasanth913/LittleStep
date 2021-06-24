import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactDetail = (props) => {

    const { name , email } = props.location.state.contact;

    return (
        <div className="main">
          <div className="ui card centered">
            <div className="image">
                <img  src={user} alt="user" />
            </div>
            <div className="contact">
                <div className="Header">{ name }</div>
                <div className="description">{ email }</div>
            </div>
          </div>
          <div className="center-div">
            <Link to="/">
              <button className="ui button blue center"> Back to contact List</button>
            </Link>
          </div>
        </div>
    )

}

export default ContactDetail;