import styles from './ContactItem.module.css';

function ContactItem({data:{ name, lastName , email , phone,id},deleteHandler}) {
    
  return (
    <li className={styles.item}>
        <p>{name}{lastName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <button onClick={()=> deleteHandler(id)}>Delete</button>
    </li>
  )
}

export default ContactItem