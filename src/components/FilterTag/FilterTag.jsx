import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterTag, DeleteButton } from './FilterTag.styles';

// images
import vectorX from '../../images/vectorX.svg';

const FilterTag = ({ children, onDeleteClick }) => {
  return (
    <StyledFilterTag>
      {children}
      <DeleteButton type='button' onClick={onDeleteClick}>
        <img src={vectorX} alt='Retirer le filtre' />
      </DeleteButton>
    </StyledFilterTag>
  );
};

FilterTag.propTypes = {
  /**
   * Specifies the content of the filter tag
   */
  children: PropTypes.node,
  /**
   * The click event allowing this filter to be deleted
   */
  onDeleteClick: PropTypes.func,
};

FilterTag.defaultProps = {
  children: undefined,
  onDeleteClick: () => {},
};

export default FilterTag;
