import React from 'react';
import { useSelector } from 'react-redux';

const ShowContactList = filterContact => {
  const visFilter = useSelector(state => state.contactFilter[0]);
  const visContact = useSelector(state => state.contactsBook);
  console.log('filt', visFilter);
  console.log('cont', visContact);
  let show = [];

  if (!visFilter) {
    show = visContact;
  } else {
    show = visFilter;
  }
  // show = vis.contactFilter === [] ? vis.contactFilter : vis.contactsBook;
  console.log('show', show);
  return (
    // show === [] &&
    show.map(({ name, id }) => {
      return (
        <div key={id}>
          <div>{name}</div>
        </div>
      );
    })
  );
};

export default ShowContactList;
// (
//   show === [] &&
//   show.map[0](({ name, id }) => {
//     console.log('name', name);
//     return (
//       <div key={id}>
//         <div>{name}</div>
//       </div>
//     );
//   })
// );
