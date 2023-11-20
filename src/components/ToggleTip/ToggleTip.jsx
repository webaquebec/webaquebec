// vendors
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// styles
import colors from '../../styles/colors';
import { Bubble, Button, Wrapper } from './ToggleTip.styles';

/**
 * @module ToggleTip
 * @description
 * ToggleTip is like a tooltip in the sense that it can provide supplementary or clarifying information
 *
 * @see more [https://inclusive-components.design/tooltips-toggletips/#inclusivetoggletips)
 *
 * @example
 *
 * <ToggleTip>
 *   <-- the ToggleTip's contents -->
 * </Box>
 */
const ToggleTip = ({
  label,
  lightColor,
  darkColor,
  invert,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);

  const toggleTip = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Wrapper {...rest}>
      <Button
        type='button'
        className={open ? 'active' : ''}
        aria-label={label}
        onClick={toggleTip}
        $invert={invert}
        $lightColor={lightColor}
        $darkColor={darkColor}
      >
        <span>ℹ</span>
      </Button>

      {open && <Bubble role='status'>{children}</Bubble>}
    </Wrapper>
  );
};

ToggleTip.propTypes = {
  /**
   * The content of the tip
   */
  children: PropTypes.node.isRequired,
  /**
   * The label associated to the tip
   */
  label: PropTypes.string,
  /**
   * The dark theme color
   */
  darkColor: PropTypes.string,
  /**
   * The light theme color
   */
  lightColor: PropTypes.string,
  /**
   * Whether to apply an inverted theme
   */
  invert: PropTypes.bool,
};
ToggleTip.defaultProps = {
  label: "Plus d'informations",
  invert: false,
  lightColor: colors.white,
  darkColor: colors.black,
};

export default ToggleTip;
