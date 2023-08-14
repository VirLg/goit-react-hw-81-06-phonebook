import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slice';
import { filter } from '../redux/sliceFilter';
import { myContactSelector } from 'redux/selector';
const App = function () {
  const { contactsBook } = useSelector(myContactSelector);
  const dispatch = useDispatch();
  const addContact = props => {
    const { name, number } = props;
    if (contactsBook) {
      const check = contactsBook.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (check) {
        return alert('NoNoNo');
      }
      // setContacts(prev => [{ name, number, id: nanoid() }, ...prev]);
      dispatch(add({ name, number, id: nanoid() }));
    }
  };

  const filterContact = e => {
    if (e.target.value) {
      const filterSelector = contactsBook.filter(el =>
        el.name.includes(e.target.value)
      );
      dispatch(filter(filterSelector));
    } else {
      dispatch(filter([]));
    }
  };

  const deleteContact = id => {
    dispatch(remove(contactsBook.filter(el => el.id !== id)));
  };

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
      {/* <ShowContactList /> */}
      <Contact deleteContact={deleteContact} />
    </div>
  );
};

export default App;
