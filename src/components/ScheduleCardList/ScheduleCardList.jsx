// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import ScheduleCard from './ScheduleCard';
import colors from '../../styles/colors';

const List = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  margin: 0;
  padding: 0;

  list-style: none;

  li {
    flex: 1 1 0;
    height: 100%;
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

const timeColumnStyle = css`
  display: flex;
  flex-flow: row nowrap;
  margin-left: -88px;
`;

const timeStyle = css`
  font-size: 16px;
  min-width: 60px;
  text-align: right;
  margin-top: 24px;
  margin-right: 28px;
`;

const ScheduleCardList = ({ children, time, groupedUp }) => {
  const nodes = React.Children.toArray(children);

  return (
    <div css={{ marginTop: groupedUp ? "0" : "36px" }}>
      <div css={timeColumnStyle}>
        <div css={timeStyle}>{ time }</div>
        <List>
          {nodes.map(({ key, props }, index) => (
            <li key={`schedule-card-${key}`}>
              <ScheduleCard
                groupedUp={groupedUp}
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
};

export default ScheduleCardList;
