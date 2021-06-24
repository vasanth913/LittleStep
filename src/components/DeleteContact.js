import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const DeleteContact = (props) => {


    const { id , name } = props.location.state.contact;

    const removeContactHandler = (id) => {
        props.getContactId(id);

    }


    const submit = () => {
        confirmAlert({
          title: 'Confirm to delete',
          message: `Are you sure to do ${name}`,
          buttons: [
            {
              label: 'Yes',
              onClick:  () => {removeContactHandler (id)}
            },
            {
              label: 'No',
              onClick: props.history.push('/')
            }
          ]
        });
      };
    

    return (
        <div className="main">
            <button onClick={submit}>Confirm dialog</button>
        </div>
    )

}

export default DeleteContact;