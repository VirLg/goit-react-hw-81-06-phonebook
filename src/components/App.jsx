import { useState } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slice';
import { filter } from '../redux/sliceFilter';
import { filterSlice } from '../redux/sliceFilter';
import { SelectorContact } from 'redux/selector';
import ShowContactList from './showContactList/ShowContactList';

// import { add, remove } from 'redux/store';
const App = function () {
  //*******************use */
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [showContact, useShowContact] = useState('');
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (localStorage.contacts === []) setContacts([]);

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  //*****************use */

  const dispatch = useDispatch();
  const addContact = props => {
    const { name, number } = props;
    if (contacts) {
      const check = contacts.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (check) {
        return alert('NoNoNo');
      }
      setContacts(prev => [{ name, number, id: nanoid() }, ...prev]);
      dispatch(add({ name, number, id: nanoid() }));
    }
  };

  const selector = useSelector(state => state);
  // console.log('selector', selector.contactsBook[0].name);
  // if (selector.contactsBook !== []) {
  // const [a, b] = selector;
  // console.log('selector a', a);
  // console.log('selector b', b);
  // }
  const filterContact = e => {
    if (e.target.value) {
      const filterSelector = selector.contactsBook.filter(el =>
        el.name.includes(e.target.value)
      );

      dispatch(filter(filterSelector));
      return filterSelector;
    } else {
      dispatch(filter([]));
      return selector.contactsBook;
    }
    // ====================
    // );
    // if (e.target.value) {

    //   console.log('first', filterSelector);
    // }
    // dispatch(filterSlice(selector.contactsBook));
    // console.log('aaa', selector.contactsBook);
    // setFilter(e.target.value);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
    dispatch(remove(contacts.filter(el => el.id !== id)));
  };
  // const show = () => {
  //   console.log('selector', selector);
  //   const all = selector.contactsBook.map(el => el.name);
  //   console.log('all', all);
  //   return all;
  // };

  const visible =
    contacts !== [] && contacts.filter(el => el.name.includes(filter));

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Form addContact={addContact} />
      <Filter filterContact={filterContact} />
      {/* <Filter filterContact={filterContact} stateFilter={filter} /> */}
      {/* <Contact props={visible} deleteContact={deleteContact} /> */}
      <ShowContactList />
    </div>
  );
};

export default App;
