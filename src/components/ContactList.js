import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    

    const renderContactList = props.contacts.map((contact) => {
        return(
           <ContactCard contact={contact} key={contact.id} ></ContactCard>
        )
    })
    return(
        <div className="ui celled list">
            <h2> Contact List 
               <Link to="/add"> <button className="ui button blue right"> Add Contact</button> </Link>
            </h2>
            {renderContactList}
        </div>
    )
}

export default ContactList;