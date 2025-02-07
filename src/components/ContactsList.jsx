import styles from './ContactList.module.css'

import ContactItem from './ContactItem'

function ContactsList({contacts,deleteHandler}) {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length?(
      <ul className={styles.contacts}>
        {contacts.map(contact=>
        <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>
       )}
      </ul>):(
        <p className={styles.message}>No contacts yet!</p>
      )}
    </div>
  )
}

export default ContactsList