// vendors
import React from 'react';

// components
import Board from './Board';
import PremiumGrid from './PremiumGrid';

// styles
import Wrapper from './PartnersGrid.styles';

const PartnersGrid = () => {
  return (
    <Wrapper>
      <PremiumGrid />

      <Board />
    </Wrapper>
  );
};

export default PartnersGrid;
