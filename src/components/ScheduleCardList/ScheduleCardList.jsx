// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// utils
import { greaterThan, lessThan } from '../../utils/mediaQuery';

// Components
import ScheduleCard from './ScheduleCard';
import colors from '../../styles/colors';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0 16px;

  margin: 0;
  padding: 0;

  list-style: none;

  ${lessThan(1024)} {
    margin: 0 0 32px;
  }

  ${greaterThan(1024)} {
    flex-flow: row nowrap;
  }

  li {
    flex: 1 1 0;
    height: 100%;

    ${lessThan(1024)} {
      a {
        border-bottom-width: 0;
      }

      &:first-child a {
        border-radius: 16px 16px 0 0;
      }

      &:last-child a {
        border-bottom-width: 2px;
        border-radius: 0 0 16px 16px;
      }

      &:first-child:last-child a {
        border-bottom-width: 2px;
        border-radius: 16px;
      }
    }
  }
`;

// const borderTopRadiusStyle = css`
//   > * {
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//   }
// `;

// const borderBottomRadiusStyle = css`
//   > * {
//     border-bottom-right-radius: 20px;
//     border-bottom-left-radius: 20px;
//   }
// `;

const timeColumnStyle = css`
  display: flex;
  flex-flow: row nowrap;
  margin-left: -88px;
`;

const timeStyle = css`
  display: block;

  min-width: 60px;

  margin-top: 24px;
  margin-right: 28px;

  font-size: 16px;

  text-align: right;

  ${lessThan(1384)} {
    opacity: 0;
  }
`;

export const placeStyle = css`
  color: ${colors.blueberry40};
  font-size: 24px;
`;

const ScheduleCardList = ({ children, time, groupedUp, groupedDown }) => {
  const nodes = React.Children.toArray(children);

  return (
    <div css={{ marginTop: groupedUp ? '0' : '36px' }}>
      <div css={timeColumnStyle}>
        <div css={timeStyle}>{time}</div>
        <List>
          {nodes.map(({ key, props }) => (
            <li key={`schedule-card-${key}`}>
              <ScheduleCard
                groupedUp={groupedUp}
                groupedDown={groupedDown}
                {...props}
              />
            </li>
          ))}
        </List>
      </div>
    </div>
  );
};

ScheduleCardList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  time: PropTypes.string,
  groupedUp: PropTypes.bool,
  groupedDown: PropTypes.bool,
};

ScheduleCardList.defaultProps = {
  time: undefined,
  groupedUp: false,
  groupedDown: false,
};

export default ScheduleCardList;
