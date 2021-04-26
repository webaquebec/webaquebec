import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import StyledButton, {
  TextWrapper,
  IconContainer,
  IconWrapper,
} from './Button.styles';

const defaultTags = {
  link: Link,
  href: 'a',
  button: 'button',
};

const Button = ({
  to,
  tag,
  type,
  primary,
  outlined,
  small,
  renderIcon,
  iconFirst,
  animated,
  disabled,
  children,
  ...rest
}) => {
  const selectedTag = defaultTags[tag || `button`] || tag;

  const props = {
    to: tag === `link` ? to : undefined,
    href: tag === `href` ? to : undefined,
    type: !tag || tag === `button` ? type || `button` : undefined,
    ...rest,
  };

  return (
    <StyledButton
      as={selectedTag}
      disabled={disabled}
      $primary={primary}
      $small={small}
      $hasIcon={!!renderIcon}
      $iconFirst={iconFirst}
      $outlined={outlined}
      $animated={animated}
      {...props}
    >
      {renderIcon ? (
        <>
          <TextWrapper>{children}</TextWrapper>

          <IconContainer>
            <IconWrapper>{renderIcon}</IconWrapper>
          </IconContainer>
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Specifies how the button itself should be rendered.
   */
  tag: PropTypes.string,
  /**
   * Specifies the reference to a local page (i.e. /about) used with Gatsby Link tag
   */
  to: PropTypes.string,
  /**
   * Specifies the type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Specifies the primary style should be applied to the button
   */
  primary: PropTypes.bool,
  /**
   * Specifies the outlined style should be applied to the button
   */
  outlined: PropTypes.bool,
  /**
   * Specifies whether the button is small or regular size
   */
  small: PropTypes.bool,
  /**
   * Specifies the button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Specifies the button should be animated
   */
  animated: PropTypes.bool,
  /**
   * Specifies whether the icon is positioned before or after the text content
   */
  iconFirst: PropTypes.bool,
  /**
   * Specifies the icon element applied to the button
   */
  renderIcon: PropTypes.node,
  /**
   * Specifies the content of the button
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  children: undefined,
  tag: undefined,
  to: undefined,
  type: undefined,
  primary: false,
  outlined: false,
  small: false,
  disabled: false,
  animated: false,
  iconFirst: false,
  renderIcon: undefined,
};

export default Button;
