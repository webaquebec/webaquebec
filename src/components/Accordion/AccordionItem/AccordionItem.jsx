// vendors
import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import { rem } from 'polished';

// utils
import randomString from '../../../utils/math/randomString';

// styles
import {
  Container,
  grayContainer,
  Heading,
  grayHeading,
  Button,
  grayButton,
  TitleWrapper,
  Panel,
  grayPanel,
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
  grayStyle,
  children,
  expanded,
  onToggleClick,
}) => {
  const [maxHeight, setMaxHeight] = useState(null);
  const [accordionItemId, setAccordionItemId] = useState('');

  const headingRef = useRef(null);

  useEffect(() => {
    setAccordionItemId(randomString());
  }, []);

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
      lightColor={colors.white}
      darkColor={colors.bleu}
      $maxHeight={maxHeight}
      $expanded={expanded}
      css={grayStyle && grayContainer}
    >
      <Heading
        as={titleAs}
        $expanded={expanded}
        ref={headingRef}
        css={grayStyle && grayHeading}
      >
        <Button
          id={`${accordionItemId}-header`}
          aria-controls={`${accordionItemId}-panel`}
          aria-expanded={expanded}
          onClick={onToggleClick}
          css={grayStyle && grayButton}
        >
          <TitleWrapper>{title}</TitleWrapper>

          <Toggle
            aria-label={expanded ? 'Réduire' : 'Développer'}
            $expanded={expanded}
          />
        </Button>
      </Heading>

      <Panel
        id={`${accordionItemId}-panel`}
        aria-labelledby={`${accordionItemId}-header`}
        aria-hidden={!expanded}
        $expanded={expanded}
        css={grayStyle && grayPanel}
      >
        <PanelContent>{children}</PanelContent>
      </Panel>
    </Container>
  );
};

AccordionItem.propTypes = {
  /**
   * The heading level of the item title.
   * Choose wisely to respect the semantic of the document for accessibility reasons.
   * @see [https://www.w3.org/WAI/tutorials/page-structure/headings/](https://www.w3.org/WAI/tutorials/page-structure/headings/)
   */
  titleAs: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  /**
   * The title of the item
   */
  title: PropTypes.node.isRequired,
  /**
   * Whether the accordion has gray style or not (style used for filters)
   */
  grayStyle: PropTypes.bool,
  /**
   * Child node elements within the item panel content
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether an item is expanded
   */
  expanded: PropTypes.bool,
  /**
   * The click event allowing items to be expanded
   */
  onToggleClick: PropTypes.func,
};

AccordionItem.defaultProps = {
  grayStyle: false,
  expanded: false,
  onToggleClick: () => {},
};

export default AccordionItem;
