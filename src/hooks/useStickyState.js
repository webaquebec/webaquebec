import React from 'react';

export const isBrowser = () => typeof window !== 'undefined';

const getValue = (key, defaultValue) =>
  isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;

const setValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const useStickyState = (defaultValue, key) => {
  const [value, setter] = React.useState(() => getValue(key, defaultValue));

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
};

export default useStickyState;