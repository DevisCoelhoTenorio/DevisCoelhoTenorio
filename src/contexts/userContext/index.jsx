import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const userContext = createContext(null);

export function UserProvider({ children }) {
  return (
    <UserProvider.Provider value={}>
      {children}
    </UserProvider.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
