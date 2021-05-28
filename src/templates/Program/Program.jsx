// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import moment from 'moment';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import ScheduleCardList from '../../components/ScheduleCardList';
import ScheduleCard from '../../components/ScheduleCardList/ScheduleCard';
import StyledSectionContainer from '../../components/SectionContainer';

// images
import ogImgProgram from '../../images/og/og-img-program-disponible.jpg';

// views
import Hero from '../../views/ProgramPageView/Hero';

// utils
import slugify from '../../utils/strings/slugify';
import breakpointsRange from '../../utils/breakpointsRange';

// styles
import breakpoints from '../../styles/breakpoints';

const SectionContainer = styled(StyledSectionContainer)`
  margin-top: -60px;
  padding: 0 16px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

/**
 * Template used to display daily plannings from Swapcard API
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createProgramSessionPages.js) and use that as variables GraphQL query.
 */
const Program = ({
  location,
  data,
  pageContext: { eventDates, pagePaths, pageNumber },
}) => {
  const {
    swapcard: { plannings },
  } = data;

  // Re-arrange event dates the way we want to display them in the UI
  const displayableDates = eventDates.reduce((acc, current, index, array) => {
    let item = current;
    if (index === array.length - 1) {
      item = 'bonus !';
    }
    acc.push(item);

    return acc;
  }, []);

  const getFormattedTime = (date) => {
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
    <Layout location={location}>
      <SEO
        title='Programmation'
        description='Plus de 50 conférences sur 3 jours avec des ateliers, du réseautage et une multitude d’activités. Découvre la programmation du Web à Québec.'
        image={ogImgProgram}
      />

      <Hero location={location} datePaths={datePaths} />

      <SectionContainer forwardedAs='div' faded>
        <Center maxWidth='850px'>
          <ScheduleCardList>
            {program.map((current) => (
              <ScheduleCard
                to={`/programmation/${slugify(current.title)}/`}
                title={current.title}
                content={current.description}
                place={current.place}
                time={
                  pageNumber !== eventDates.length ? current.time : undefined
                }
                type={current.type}
                categories={current.categories}
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
    pageNumber: PropTypes.number,
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
