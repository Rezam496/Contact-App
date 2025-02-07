import React from 'react'

function ContactItem({data:{ name, lastName , email , phone,id}}) {
  return (
    <li key={id}>
        <p>{name}{lastName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button>Delete</button>
    </li>
  )
}

export default ContactItem