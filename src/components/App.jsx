import { Component } from 'react';
import { Container } from './App.styled';

import Section from './Section/Section';
import ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  formSubmitHandler = newContact => {
   const normName = newContact.name.toLowerCase();
    this.state.contacts.find(({ name }) => name.toLowerCase() === normName)
      ? alert(newContact.name + "is already in contscts")
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };

  deleteRecipe = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm addNewContact={this.formSubmitHandler} />
        </Section>
        <Filter value={this.state.filter} onChange={this.changeFilter} /> 
        <Section title="Contacts">
          <ContactList options={visibleContacts} onDelete={this.deleteRecipe} />
        </Section>
      </Container>
  );
  }
  
};


export default App;