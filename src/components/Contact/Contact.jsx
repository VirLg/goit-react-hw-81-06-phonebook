import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';
import { myContactSelector } from 'redux/selector';
const Contact = ({ deleteContact }) => {
  const visFilter = useSelector(myContactSelector).contactFilter[0];
  const visContact = useSelector(myContactSelector).contactsBook;

  let show = [];

  if (!visFilter || visFilter.length === 0) {
    show = visContact;
  } else {
    show = visFilter;
  }
  return show.map(({ number, name, id }) => {
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
