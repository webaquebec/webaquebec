// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useMedia } from 'react-use';

// utils
import {
  greaterThan,
  lessThan,
  lessThanCondition,
} from '../../utils/mediaQuery';
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
  gap: 12px;

  margin: 0;
  padding: 0;

  list-style: none;

  ${greaterThan(1248)} {
    flex-flow: row nowrap;
  }

  li {
    flex: 1 1 0;
    height: 100%;

    ${lessThan(1248)} {
      a {
        border-radius: 16px;
      }
    }
  }
`;

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
  const mobile = useMedia(lessThanCondition(1248));
  const nodes = React.Children.toArray(children);

  return (
    <div css={{ marginTop: groupedUp && !mobile ? '0' : '44px' }}>
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
