import { createContext, useContext } from 'react';
import { useReducer } from 'react';

const initialState = {
  mynumber: 0,
  mynumber1: 0,
  mynumber2: 0,
};

const reducer = (state, { type, payload }) => {
  if (
    [
      'increment',
      'decrement',
      'setMynumber',
      'setMynumber1',
      'setMynumber2',
    ].includes(type)
  ) {
    payload = Number(payload) || 0;
  }

  switch (type) {
    case 'increment':
      state.mynumber = state.mynumber + 1;
      break;

    case 'decrement':
      state.mynumber = state.mynumber - 1;
      break;

    case 'setMynumber':
      state.mynumber = payload;
      break;

    case 'setMynumber1':
      state.mynumber1 = payload;
      break;

    case 'setMynumber2':
      state.mynumber = payload;
      state.mynumber1 = payload;
      state.mynumber2 = payload;
      break;

    default:
      break;
  }

  return { ...state };
};

const No5Context = createContext(initialState);

const No5Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <No5Context.Provider value={[state, dispatch]}>
      {children}
    </No5Context.Provider>
  );
};

export const useNo5 = () => useContext(No5Context);

export default No5Provider;
