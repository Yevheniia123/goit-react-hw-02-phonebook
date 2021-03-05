import React, { Component } from 'react';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.formLabel}>
          Name
          <input
            type="text"
            name="name"
            className={s.formInput}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label className={s.formLabel}>
          Number
          <input
            type="number"
            name="number"
            className={s.formInput}
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={s.add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
