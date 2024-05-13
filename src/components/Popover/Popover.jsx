// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { autoUpdate, offset, useFloating } from '@floating-ui/react';

const Popover = ({ renderTarget, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-end',
    whileElementsMounted: autoUpdate,
    middleware: [offset(4)],
  });

  const targetElement = React.cloneElement(renderTarget, {
    ref: refs.setReference,
    onClick: () => setIsOpen(!isOpen),
  });

  return (
    <>
      {targetElement}

      {isOpen && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

Popover.propTypes = {
  renderTarget: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popover;
