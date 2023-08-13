import { useSelector } from 'react-redux';
export const SelectorContact = () => {
  const selector = useSelector(state => state.contacts);
  //   console.log('selector', selector);
  console.log('value', selector);
  return <div>{selector}</div>;
};
