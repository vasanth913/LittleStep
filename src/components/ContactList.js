import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const searchInput = useRef("");

    const getSearchTerm = () => {
        const searchValue = searchInput.current.value;
        props.searchKeyword(searchValue);
    }

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
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={searchInput} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon" />
                </div>
            </div>
            {renderContactList.length > 0 ? renderContactList : "No Contacts Available"}
        </div>
    )
}

export default ContactList;