// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  autoUpdate,
  offset,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

const Popover = ({ renderTarget, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: 'bottom-end',
    whileElementsMounted: autoUpdate,
    middleware: [offset(4)],
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const targetElement = React.cloneElement(renderTarget, {
    ref: refs.setReference,
    onClick: () => setIsOpen(!isOpen),
    ...getReferenceProps(),
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
          {...getFloatingProps()}
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
