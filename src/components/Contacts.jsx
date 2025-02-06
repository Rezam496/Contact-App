import React, { useState } from 'react';

import ContactsList from './ContactsList';

function Contacts() {

    const [contact , setContact]=useState({name:"",lastName:"",email:"",phone:""});
    const [contacts , setContacts]=useState([]);
    const [alert , setAlert]=useState("");

    const changeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setContact((contact)=>({...contact,[name]:value}));
    }

    const addHandler=()=>{
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("please enter valid data!");
            return;
        }
        setContacts((contacts)=>([...contacts,contact]));
        setContact({name:"",lastName:"",email:"",phone:""});
        setAlert("")
    }

  return (
    <div>
        <div>
            <input type="text"   placeholder='Name'     value={contact.name}    name='name' onChange={changeHandler}/>
            <input type="text"   placeholder='Last Name'value={contact.lastName}name='lastName' onChange={changeHandler}/>
            <input type="email"  placeholder='Email'    value={contact.email}   name='email' onChange={changeHandler}/>
            <input type="number" placeholder='Phone'    value={contact.phone}   name='phone' onChange={changeHandler}/>
            <button onClick={addHandler}>Add Contact</button>
        </div>
        <div>{alert && <p>{alert}</p>}</div>
        <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts