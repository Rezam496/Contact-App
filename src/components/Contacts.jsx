import React, { useState } from 'react';
import inputs from '../constants/inputs';
import ContactsList from './ContactsList';
import styles from './Contacts.module.css';
import { v4 } from 'uuid';

function Contacts() {

    const [contact , setContact]=useState({id:"",name:"",lastName:"",email:"",phone:""});
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
        const newContact={...contact,id:v4()};
        setContacts((contacts)=>([...contacts,newContact]));
        setContact({name:"",lastName:"",email:"",phone:""});
        setAlert("")
    }
    const deleteHandler=(id)=>{
        setContacts(contacts.filter((contact)=>contact.id!==id));
     }

  return (
    <div className={styles.container}>
        <div className={styles.form}>
            {inputs.map((input,index)=>(
                <input 
                key={index} 
                type={input.type} 
                placeholder={input.placeholder}  
                value={contact[input.name]} 
                name={input.name} 
                onChange={changeHandler}/>))}
            <button onClick={addHandler}>Add Contact</button>
        </div>

        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

        <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contacts