import React, { useState , useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';
import { uuid } from 'uuidv4';

function App() {

  const [contacts , setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    setContacts([...contacts,{id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts){
      setContacts(retrievedContacts);
    }
 },[])

  useEffect(() => {
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])

  return (
    <div className="ui container">
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact render = {(props) => (<ContactList {...props} contacts={contacts} />)}></Route>
            <Route path='/add'  render={(props) => (<AddContact {...props} addContactHandler={addContactHandler} />)}></Route>
            <Route path='/contact/:id'  component = {ContactDetail} ></Route>
            <Route path='/delete'  render = {(props) => (<DeleteContact {...props}  getContactId={removeContactHandler} />)} ></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
