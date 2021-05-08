// vendors
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ScheduleCard from './ScheduleCard';

const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;
`;

const ScheduleCardList = ({ children }) => {
  const nodes = React.Children.toArray(children);

  return (
    <List as='ul'>
      {nodes.map(({ key, props }) => (
        <li key={key}>
          <ScheduleCard {...props} />
        </li>
      ))}
    </List>
  );
};

ScheduleCardList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.shape({
        /* Defined other props here */
      }),
    })
  ).isRequired,
};

export default ScheduleCardList;
