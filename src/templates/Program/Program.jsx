// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import moment from 'moment';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import ScheduleCardList from '../../components/ScheduleCardList';
import ScheduleCard from '../../components/ScheduleCardList/ScheduleCard';
import SectionContainer from '../../components/SectionContainer';

// views
import Hero from '../../views/ProgramPageView/Hero';

// utils
import slugify from '../../utils/strings/slugify';

/**
 * Template used to display daily plannings from Swapcard API
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createProgramSessionPages.js) and use that as variables GraphQL query.
 */
const Program = ({ data, pageContext: { eventDates, pagePaths } }) => {
  const {
    swapcard: { plannings },
  } = data;

  console.log(plannings);

  // Re-arrange event dates the way we want to display them in the UI
  const displayableDates = eventDates.reduce((acc, current, index, array) => {
    let item = current;
    if (index === array.length - 1) {
      item = 'bonus !';
    }
    acc.push(item);

    return acc;
  }, []);

  // Re-arrange values from the programDatesPath array the way we want to use it in our template
  // const dates = programDatesPath.map((current) => ({
  //   dayNumber: current.date.split(':')[0],
  //   dayName: current.date.split(':')[1],
  //   ...current,
  // }));

  const getFormattedTime = (str) => {
    const date = new Date(str);
    return moment(date).format('HH:mm');
  };

  // Re-arrange values from the plannings array the way we want to use it in our template
  const program = plannings.map((planning) => ({
    time: {
      beginsAt: getFormattedTime(planning.beginsAt),
      endsAt: getFormattedTime(planning.endsAt),
    },
    ...planning,
  }));

  // const getFormattedDateNumber = (str) => {
  //   const date = new Date(str);
  //   return moment(date).format('DD');
  // };

  const datePaths = displayableDates.map((date, index) => ({
    date,
    path: pagePaths[index],
  }));

  return (
    <Layout>
      <SEO title='Programmation 2021' />

      <Hero datePaths={datePaths} />

      <SectionContainer
        as='div'
        faded
        css={`
          margin-top: -60px;
        `}
      >
        <Center maxWidth='850px'>
          <ScheduleCardList>
            {program.map((current) => (
              <ScheduleCard
                to={`/programmation/${slugify(current.title)}/`}
                title={current.title}
                content={current.description}
                place={current.place}
                time={current.time}
                type={current.type}
                category={current.categories[0]}
                speakers={current.speakers}
              />
            ))}
          </ScheduleCardList>
        </Center>
      </SectionContainer>
    </Layout>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Program.propTypes = {
  data: PropTypes.shape({
    swapcard: PropTypes.shape({
      plannings: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    nextPagePath: PropTypes.string,
    previousPagePath: PropTypes.string,
    eventDates: PropTypes.arrayOf(PropTypes.string),
    pagePaths: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Program;

/**
 * Query to get schedules from a list of IDs
 * @param {string} $eventId — Id of the Swapcard event
 * @param {number} $page — Index of our loop is the offset of which planning we want to display
 * @param {number} $pageSize — Number of plannings we want to display per page
 * @param {string[]} $planningIds — List of planning Ids we want to filter from
 * See @link gatsby/createScheduleSessionPages.js
 */
export const programQuery = graphql`
  query ProgramByIds(
    $eventId: String!
    $page: Int!
    $pageSize: Int!
    $planningIds: [ID!]
  ) {
    swapcard {
      plannings(
        eventId: $eventId
        page: $page
        pageSize: $pageSize
        filters: { planningIds: $planningIds }
        sort: { field: BEGINS_AT, order: ASC }
      ) {
        id
        beginsAt
        endsAt
        description
        descriptionTranslations {
          language
          value
        }
        htmlDescription
        isPrivate
        place
        type
        title
        titleTranslations {
          language
          value
        }
        categories
        speakers {
          id
          firstName
          lastName
          organization
          jobTitle
          photoUrl
        }
      }
    }
  }
`;
