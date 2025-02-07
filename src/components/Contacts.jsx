import React, { useState } from 'react';
import inputs from '../constants/inputs';
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

        <div>{alert && <p>{alert}</p>}</div>

        <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts