import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import initialContacts from "./contacts.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("contacts"));
    if (savedData !== null) {
      return savedData;
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSubmit = (values, actions) => {
    values = { ...values, id: nanoid() };
    setContacts((prevTasks) => {
      return [...prevTasks, values];
    });
    actions.resetForm();
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
