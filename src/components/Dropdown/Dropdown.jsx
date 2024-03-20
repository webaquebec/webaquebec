// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '../../utils/math/randomString';

// styles
import {
  Container,
  DropdownButtonWrapper,
  DropdownButton,
  TitleWrapper,
  DropdownMenu,
  LinkButton,
  Toggle,
} from './Dropdown.styles';
import colors from '../../styles/colors';

const Dropdown = ({ title, children, ...rest }) => {
  const dropdownId = randomString();
  const [expanded, setExpanded] = useState(false);

  const onToggleClick = () => {
    setExpanded((state) => !state);
  };

  return (
    <Container
      padding='0'
      lightColor={colors.peach}
      darkColor={colors.blueberry}
      {...rest}
    >
      <DropdownButtonWrapper $expanded={expanded}>
        <DropdownButton
          id={`${dropdownId}-button`}
          aria-controls={`${dropdownId}-panel`}
          aria-expanded={expanded}
          onClick={onToggleClick}
        >
          <TitleWrapper>{title}</TitleWrapper>

          <Toggle
            aria-label={expanded ? 'Réduire' : 'Développer'}
            $expanded={expanded}
          />
        </DropdownButton>
      </DropdownButtonWrapper>

      <DropdownMenu
        id={`${dropdownId}-panel`}
        aria-labelledby={`${dropdownId}-button`}
        aria-hidden={!expanded}
        $expanded={expanded}
        role='menu'
      >
        {children.map(({ props }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <LinkButton key={`item-${index}`} {...props} />
        ))}
      </DropdownMenu>
    </Container>
  );
};

Dropdown.propTypes = {
  /**
   * The title of the item
   */
  title: PropTypes.node.isRequired,
  /**
   * Child node elements within the item panel content
   */
  children: PropTypes.node.isRequired,
};

export default Dropdown;
