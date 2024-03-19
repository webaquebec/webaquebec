// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// utils
import { greaterThan, lessThan } from '../../utils/mediaQuery';
import breakpointsRange from '../../utils/breakpointsRange';

// components
import ScheduleCard from './ScheduleCard';

// styles
import colors from '../../styles/colors';
import breakpoints from '../../styles/breakpoints';
import { fontWeights } from '../../styles/typography';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0 16px;

  margin: 0;
  padding: 0;

  list-style: none;

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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0 16px;

  ${greaterThan(768)} {
    flex-flow: row nowrap;
  }
`;

const timeStyle = css`
  display: block;

  flex-shrink: 0;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.ultrabold};
  text-align: center;

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'padding', sizes: [16, 16], bases: [16, 20] },
      { prop: 'width', sizes: [80, 80], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

export const placeStyle = css`
  color: ${colors.blueberry40};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const ScheduleCardList = ({ children, time, groupedUp, groupedDown }) => {
  const nodes = React.Children.toArray(children);

  return (
    <div css={{ marginTop: groupedUp ? '0' : '36px' }}>
      <Row>
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
      </Row>
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
