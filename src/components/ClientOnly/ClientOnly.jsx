// vendors
import React from 'react';
import PropTypes from 'prop-types';

// hooks
import useHasMounted from '../../hooks/useHasMounted';

/**
 * @name ClientOnly
 * @description
 * HOC (High Order Component) to abstract rendering to second pass
 * and avoid rehydration issue with React
 *
 * @see [The Perils of Rehydration](https://www.joshwcomeau.com/react/the-perils-of-rehydration/)
 *
 * @example
 *
 * <ClientOnly>
 *   <!-- any child node -->
 * </ClientOnly>
 *
 */
const ClientOnly = ({ children, ...rest }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }
  return <div {...rest}>{children}</div>;
};

export default ClientOnly;

ClientOnly.propTypes = {
  /**
   * Any child node elements
   */
  children: PropTypes.node.isRequired,
};
