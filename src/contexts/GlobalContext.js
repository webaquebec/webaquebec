import React, { useMemo, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [pauseAnimation, setPauseAnimation] = useState(false);

  const value = useMemo(
    () => ({ pauseAnimation, setPauseAnimation }),
    [pauseAnimation]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
