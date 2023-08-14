import React from 'react';
import { useSelector } from 'react-redux';

const ShowContactList = filterContact => {
  const visFilter = useSelector(state => state.contactFilter[0]);
  const visContact = useSelector(state => state.contactsBook);

  let show = [];

  if (!visFilter || visFilter.length === 0) {
    show = visContact;
  } else {
    show = visFilter;
  }

  return show.map(({ name, number, id }) => {
    return (
      <div key={id}>
        <div
          style={{
            display: 'flex',
            height: '30px',
            alignSelf: 'baseLine',
          }}
        >
          <h2>{name}</h2>
          <p>{number}</p>
          <button type="button">Delete</button>
        </div>
      </div>
    );
  });
};

export default ShowContactList;
