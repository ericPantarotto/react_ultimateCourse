import PropTypes from 'prop-types';
import { createContext, useReducer } from 'react';

const FAKE_USER = {
  name: 'Eric',
  email: 'eric.carlier@gmail.com',
  password: 'qwerty',
  // avatar: 'https://i.pravatar.cc/100?u=zz',
  avatar: 'ecr.svg',
};

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  authenticationError: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        authenticationError: '',
      };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    case 'error':
      return { ...state, authenticationError: action.payload };
    default:
      throw new Error('Unknown action');
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, authenticationError }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      return dispatch({ type: 'login', payload: FAKE_USER });

    return dispatch({ type: 'error', payload: 'We could not log you in.' });
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, authenticationError, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
