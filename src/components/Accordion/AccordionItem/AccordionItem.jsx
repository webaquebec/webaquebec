// vendors
import React, { useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';

// utils
import randomString from '../../../utils/math/randomString';

// styles
import {
  bigPanelStyle,
  bigHeadingStyle,
  bigButtonStyle,
  Container,
  Title,
  Button,
  TitleContent,
  Panel,
  PanelContent,
  Toggle,
} from './AccordionItem.styles';
import colors from '../../../styles/colors';

/**
 *
 * @module AccordionItem
 *
 */
const AccordionItem = ({
  titleAs,
  title,
  bgColor,
  color,
  big,
  children,
  expanded,
  bordered,
  rounded,
  onToggleClick,
  ...rest
}) => {
  const [maxHeight, setMaxHeight] = useState(null);

  const headingRef = useRef(null);

  const accordionItemId = useMemo(() => randomString(), []);

  useEffect(() => {
    if (headingRef.current) {
      setMaxHeight(headingRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headingRef.current) {
        setMaxHeight(headingRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headingRef]);

  return (
    <Container
      noBorder
      padding='0'
      lightColor={bgColor}
      darkColor={color}
      $maxHeight={maxHeight}
      $expanded={expanded}
      $bordered={bordered}
      $rounded={rounded}
      {...rest}
    >
      <Title
        as={titleAs}
        $expanded={expanded}
        ref={headingRef}
        css={big && bigHeadingStyle}
      >
        <Button
          id={`${accordionItemId}-header`}
          aria-controls={`${accordionItemId}-panel`}
          aria-expanded={expanded}
          onClick={onToggleClick}
          css={big && bigButtonStyle}
        >
          <TitleContent>{title}</TitleContent>

          <Toggle
            aria-label={expanded ? 'Réduire' : 'Développer'}
            $expanded={expanded}
          />
        </Button>
      </Title>

      <Panel
        id={`${accordionItemId}-panel`}
        aria-labelledby={`${accordionItemId}-header`}
        aria-hidden={!expanded}
        $expanded={expanded}
        css={big && bigPanelStyle}
      >
        <PanelContent>{children}</PanelContent>
      </Panel>
    </Container>
  );
};

AccordionItem.propTypes = {
  /**
   * Specifies a different HTML tag applied to the title.
   */
  titleAs: PropTypes.string,
  /**
   * The title of the item
   */
  title: PropTypes.node.isRequired,
  /**
   * Whether the accordion item is big or regular size
   */
  big: PropTypes.bool,
  /**
   * The background color of an item
   */
  bgColor: PropTypes.string,
  /**
   * The text color of an item
   */
  color: PropTypes.string,
  /**
   * Child node elements within the item panel content
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether an item is expanded or not
   */
  expanded: PropTypes.bool,
  /**
   * Whether an item has an outline border or not
   */
  bordered: PropTypes.bool,
  /**
   * Whether an item has rounded corners or not
   */
  rounded: PropTypes.bool,
  /**
   * The click event allowing items to be expanded
   */
  onToggleClick: PropTypes.func,
};

AccordionItem.defaultProps = {
  titleAs: null,
  bgColor: colors.white,
  color: colors.blueberry10,
  big: false,
  expanded: false,
  bordered: false,
  rounded: false,
  onToggleClick: () => {},
};

export default AccordionItem;
