// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { autoUpdate, useFloating } from '@floating-ui/react';

// components
import Button from '../Button';

const ButtonWithPopover = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles } = useFloating({
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
  });

  return (
    <>
      <Button ref={refs.setReference} onClick={() => setIsOpen(!isOpen)}>
        {label}
      </Button>

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

ButtonWithPopover.propTypes = {
  /**
   * Specifies the label of the button
   */
  label: PropTypes.string,
  /**
   * Specifies the content of the button
   */
  children: PropTypes.node,
};

ButtonWithPopover.defaultProps = {
  label: '',
  children: undefined,
};

export default ButtonWithPopover;
