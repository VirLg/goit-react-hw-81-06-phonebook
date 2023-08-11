import React from 'react';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/slice';

const Contact = ({ props, deleteContact }) => {
  const dispatch = useDispatch();
  console.log('dispatch', dispatch);
  const handleClick = () => {
    return 5;
  };
  return props.map(({ number, name, id }) => {
    return (
      <ContactsDiv key={id}>
        <h2
          style={{
            fontSize: '20px',
          }}
        >
          {name}
        </h2>
        <h2
          style={{
            fontSize: '20px',
            marginLeft: '20px',
          }}
        >
          {number}
        </h2>
        <Button type="button" onClick={() => deleteContact(id)}>
          Delete
        </Button>
        <button type="button" onClick={() => dispatch(addContact())}>
          Dispatch
        </button>
      </ContactsDiv>
    );
  });
};

Contact.propTypes = {};

export default Contact;
Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  props: PropTypes.array,
};
