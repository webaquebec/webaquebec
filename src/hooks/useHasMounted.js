// vendors
import React from 'react';

/**
 * Prevent rehydration issue with React by letting us know
 * whether a component has already mounted or not.
 * @returns {boolean} true or false
 *
 * Thanks to Josh W. Comeau for this workaround
 * https://www.joshwcomeau.com/react/the-perils-of-rehydration/
 */
const useHasMounted = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
};

export default useHasMounted;
