import React, { Component } from 'react';
import SectionTitle from './SectionTitle/SectionTitle';
import ContactForm from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;
    data = { ...data, id: uuidv4() };

    const sameName = contacts.filter(contact =>
      contact.name.includes(data.name),
    );
    if (sameName.length) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  delete = itemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== itemId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <SectionTitle title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </SectionTitle>

        <SectionTitle title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList filterName={filterName} deleteId={this.delete} />
        </SectionTitle>
      </div>
    );
  }
}

export default App;
