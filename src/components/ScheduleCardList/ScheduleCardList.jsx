// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import ScheduleCard from './ScheduleCard';
import colors from '../../styles/colors';

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  > * + * {
    position: relative;

    ::before {
      position: absolute;
      top: -1px;
      left: 0;
      z-index: 1;

      width: 100%;
      height: 2px;

      background-color: ${colors.gris30};

      content: '';
    }
  }
`;

const borderTopRadiusStyle = css`
  > * {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

const borderBottomRadiusStyle = css`
  > * {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const ScheduleCardList = ({ children }) => {
  const nodes = React.Children.toArray(children);

  return (
    <List>
      {nodes.map(({ key, props }, index) => (
        <li key={`schedule-card-${key}`}>
          <ScheduleCard
            css={`
              ${index === 0 && borderTopRadiusStyle}

              ${index === nodes.length - 1 && borderBottomRadiusStyle}
            `}
            {...props}
          />
        </li>
      ))}
    </List>
  );
};

ScheduleCardList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ScheduleCardList;
