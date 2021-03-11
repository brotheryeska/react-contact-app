import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import ContactCard from "../components/ContactCard";
import {fetchContacts, deleteContact} from "../store/action"

const Home = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const destroyContact = (id) => {
    dispatch(deleteContact(id))
  }

  const renderContacts = () => {
     return contacts.map((contact) => {
      return(
        <div className="col mt-5" key={contact.id}>
          <ContactCard
            firstName={contact.firstName}
            lastName={contact.lastName}
            photo={contact.photo}
            age={contact.age}
            id={contact.id}
            onClick={() => destroyContact(contact.id)}
          />
        </div>
      )  
    })
  }

  console.log(contacts);
  return(
    <>
    <div className="container">
        <div className="mt-5">
          <h4 id="title">Contact List</h4>
        </div>
        <div className="row">{renderContacts()}</div>
      </div>
    </>
  )

}

export default Home;

