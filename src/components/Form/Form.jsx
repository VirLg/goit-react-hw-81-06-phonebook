import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = function ({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    if (evt.target.name === 'name') setName(evt.target.value);
    else setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form
      style={{
        width: '330px',
        height: '230px',
        outline: '1px solid teal',
        padding: '30px',
      }}
      onSubmit={handleSubmit}
    >
      <label
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        }}
      >
        Name
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
        }}
      >
        Number
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default Form;
