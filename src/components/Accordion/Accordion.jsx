// vendors
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

// components
import AccordionItem from './AccordionItem';
import Stack from '../LayoutSections/Stack';
import { unstyledListStyle } from '../../styles/global';

// styles
import colors from '../../styles/colors';

const grayBorder = css`
  border-bottom: 2px solid ${colors.gris30};

  &:last-child {
    border-bottom: 0;
  }
`;

/**
 *
 * @module Accordion
 *
 * @example
 * <Accordion multiple collapsible space='2rem'>
 *   <AccordionItem title='Hello? Who’s there?' titleAs='h2'>
 *     <p>Bouh 👻</p>
 *   </AccordionItem
 *
 *   <AccordionItem title='Jerry? Is that you?' titleAs='h2'>
 *     <p>Raugh 🧟‍♂️</p>
 *   </AccordionItem>
 * </Accordion>
 */
const Accordion = ({ multiple, collapsible, space, divided, children }) => {
  const [expandedItems, setExpandedItems] = useState([]);
  const [defaultExpandedItems, setDefaultExpandedItems] = useState([]);

  const items = React.Children.toArray(children);

  useEffect(() => {
    setDefaultExpandedItems(
      items
        .filter((current) => current.props.expanded)
        .map((current) => current.key)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = (itemIndex) => {
    let newArray = [...expandedItems];
    const arrayIndex = newArray.findIndex((index) => index === itemIndex);

    // Remove current index from default expanded items
    if (defaultExpandedItems.includes(itemIndex)) {
      setDefaultExpandedItems((state) => {
        const array = [...state];
        const index = array.indexOf(itemIndex);
        if (index > -1) {
          array.splice(index, 1);
        }
        return array;
      });

      return;
    }

    if (!collapsible && arrayIndex > -1) {
      return;
    }

    if (!multiple) {
      newArray = [];
    }

    if (arrayIndex > -1 && multiple) {
      newArray.splice(arrayIndex, 1);
    }

    if (arrayIndex < 0) {
      newArray.push(itemIndex);
    }

    setExpandedItems(newArray);
  };

  return (
    <Stack as='ul' space={space} css={unstyledListStyle}>
      {items.map((item) => (
        <li key={item.key} css={divided && grayBorder}>
          <AccordionItem
            {...item.props}
            onToggleClick={() => handleToggle(item.key)}
            expanded={
              defaultExpandedItems.includes(item.key) ||
              expandedItems.includes(item.key)
            }
          />
        </li>
      ))}
    </Stack>
  );
};

Accordion.propTypes = {
  /**
   *  Child node elements within the item panel content
   */
  children: PropTypes.node.isRequired,
  /**
   * Allows collapsing active items
   */
  collapsible: PropTypes.bool,
  /**
   * Allows multiple items to be expanded independently
   */
  multiple: PropTypes.bool,
  /**
   * The space (margin) between successive sibling items
   */
  space: PropTypes.string,
  /**
   * Whether the accordion has a divider or not
   */
  divided: PropTypes.bool,
};

Accordion.defaultProps = {
  divided: false,
  collapsible: false,
  multiple: false,
  space: undefined,
};

export default Accordion;
