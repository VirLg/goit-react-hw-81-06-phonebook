import { useState } from 'react';
import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { add, remove } from '../redux/slice';

// import { add, remove } from 'redux/store';
const App = function () {
  //*******************use */
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

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
      // console.log('dispatch', dispatch());
    }
  };
  const filterContact = e => setFilter(e.target.value);

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
    dispatch(remove(contacts.filter(el => el.id !== id)));
  };

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
      <Filter filterContact={filterContact} stateFilter={filter} />
      <Contact props={visible} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
