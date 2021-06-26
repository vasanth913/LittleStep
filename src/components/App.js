import React, { useState , useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';
import { uuid } from 'uuidv4';
import api from './api/contact';

function App() {

  const [contacts , setContacts] = useState([]);

  //retrieve Contacts

  const retrieveContacts = async () => {
     const response = await api.get('/contacts');
     return response.data;
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(), 
      ...contact
    }
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id } = response.data;
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
    }));
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts){
        setContacts(allContacts);
      }
    }

    getAllContacts();

 },[])

  useEffect(() => {
     //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
            <Route path='/edit'  render = {(props) => (<EditContact {...props}  updateContactHandler={updateContactHandler} />)} ></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
