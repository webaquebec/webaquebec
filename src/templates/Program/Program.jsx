// vendors
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import ScheduleCardList from '../../components/ScheduleCardList';
import ScheduleCard from '../../components/ScheduleCardList/ScheduleCard';
import StyledSectionContainer from '../../components/SectionContainer';
import Switcher from '../../components/LayoutSections/Switcher';

// contexts
// import { useProgramFilters } from '../../contexts/ProgramFiltersContext';

// views
// import Filters from '../../views/ProgramPageView/Filters';
import Hero from '../../views/ProgramPageView/Hero';
import NoResults from '../../views/ProgramPageView/NoResults';

// utils
// import unSlugify from '../../utils/strings/unSlugify';
import breakpointsRange from '../../utils/breakpointsRange';
// import { lessThan } from '../../utils/mediaQuery';
import slugify from '../../utils/strings/slugify';
import { categoriesMap } from '../../utils/dataMapping';

// styles
// import Layout from '../../components/Layout/Layout';
import breakpoints from '../../styles/breakpoints';
// import { selfBreakpoints as filtersSelfBreakpoints } from '../../views/ProgramPageView/Filters/Filters.styles';
import colors from '../../styles/colors';

const SectionContainer = styled(StyledSectionContainer)`
  min-height: 800px;

  margin-top: -40px;
  padding: 0 16px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

// const FiltersWrapper = styled.div`
//   max-width: 340px;
//
//   ${lessThan(filtersSelfBreakpoints[0])} {
//     max-width: 0;
//     margin: 0;
//   }
// `;

/**
 * Template used to display daily plannings from Swapcard API
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * {@Link gatsby/createProgramSessionPages.js} and use that as variables GraphQL query.
 */
const Program = ({
  location,
  data,
  pageContext: { eventDates, pagePaths },
}) => {
  const {
    swapcard: { plannings },
  } = data;

  // const { state } = location;

  // const {
  //   filters,
  //   dispatch: filterDispatcher,
  //   applyFilter,
  // } = useProgramFilters();

  const formatDateStr = (value) => value.replace(/-/g, '/');

  /**
   * Get list of date and path from event dates.
   * Use memoization here to cache the result to avoid expensive calculation on every render.
   *
   * @see [useMemo]{@link https://reactjs.org/docs/hooks-reference.html#usememo}
   * @see [more]{@link https://dmitripavlutin.com/react-usememo-hook/}
   * */
  const datePaths = useMemo(() => {
    // Re-arrange event dates the way we want to display them in our template
    const displayableDates = eventDates.map((current) => {
      const date = new Date(formatDateStr(current));
      const eventYear = date.getFullYear();

      // const isBonus = eventYear === 2021 && index === array.length - 1;

      const options = { weekday: 'long', day: 'numeric', month: 'long' };

      return {
        edition: eventYear,
        date: date.toLocaleDateString('fr-ca', options),
      };
    });

    const tempDatePaths = displayableDates.map((date, index) => ({
      ...date,
      path: pagePaths[index],
    }));

    return tempDatePaths;
  }, [eventDates, pagePaths]);

  /**
   * Re-arrange data from Swapcard the way we want to display it in our template
   * Use memoization here to cache the result to avoid expensive calculation on every render.
   *
   * @see [useMemo]{@link https://reactjs.org/docs/hooks-reference.html#usememo}
   * @see [more]{@link https://dmitripavlutin.com/react-usememo-hook/}
   * */
  const program = useMemo(() => {
    const getFormattedTime = (value) => {
      // Fix Safari Invalid Date issue
      const formatValue = value.replace(/-/g, '/');
      const options = { hour: '2-digit', minute: '2-digit' };
      const date = new Date(formatValue);
      return date.toLocaleTimeString('fr', options);
    };

    const modifiedPlannings = plannings.map((planning) => ({
      ...planning,
      categories: planning.categories
        .map((category) => category.value)
        .filter((category) => categoriesMap[category]),
      place: `Salle du ${planning.categories[0].value}`,
      type: slugify(planning.type),
      time: {
        beginsAt: getFormattedTime(planning.beginsAt),
        endsAt: getFormattedTime(planning.endsAt),
      },
    }));

    return modifiedPlannings;
  }, [plannings]);

  const groupedByTimeProgram = {};
  program.forEach((session) => {
    const { beginsAt } = session.time;
    if (!groupedByTimeProgram[beginsAt]) {
      groupedByTimeProgram[beginsAt] = [];
    }
    groupedByTimeProgram[beginsAt].push(session);
  });

  const sortSessionsByPlace = (sessions) => sessions.sort((a, b) => a.place >= b.place);

  const groupedByTime = Object.entries(groupedByTimeProgram);
  let groupedByTimeRangeProgram = {};
  for (let i = 0; i < groupedByTime.length; i += 1) {
    const numberOfSessionsAtTimeI = groupedByTime[i][1].length;
    const time = groupedByTime[i][0];
    const sessions = groupedByTime[i][1]
    if (numberOfSessionsAtTimeI >= 4) {
      const numberOfSessionsAtTimeI1 = groupedByTime[i + 1][1].length;
      const timeI1 = groupedByTime[i + 1][0];
      const sessionsI1 = groupedByTime[i + 1][1];
      if (numberOfSessionsAtTimeI1 >= 4) {
        const sessionsPlace = sessions.map((session) => session.place);
        const sessionsI1Place = sessionsI1.map((session) => session.place);
        const allPlaces = [
          ...new Set([sessionsPlace, sessionsI1Place].flat()).values(),
        ];
        const missingPlacesSessions = allPlaces.filter(
          (place) => !sessionsPlace.includes(place)
        );
        const missingPlacesSessionsI1 = allPlaces.filter(
          (place) => !sessionsI1Place.includes(place)
        );

        missingPlacesSessions.forEach((place) =>
          sessions.push({ place, noEvent: true })
        );
        missingPlacesSessionsI1.forEach((place) =>
          sessionsI1.push({ place, noEvent: true })
        );

        groupedByTimeRangeProgram[`${time};${timeI1}`] = [
          sortSessionsByPlace(sessions),
          sortSessionsByPlace(sessionsI1),
        ];
        i += 1;
      } else {
        groupedByTimeRangeProgram[time] = sortSessionsByPlace(sessions);
      }
    } else {
      groupedByTimeRangeProgram[time] = sortSessionsByPlace(sessions);
    }
  }
  groupedByTimeRangeProgram = Object.entries(groupedByTimeRangeProgram);
  console.log(groupedByTimeRangeProgram)

  return (
    <>
      <SEO
        title='Programmation'
        description='Plus de 50 conférences sur 3 jours avec des ateliers, du réseautage et une multitude d’activités. Découvre la programmation du Web à Québec.'
      />

      <Hero datePaths={datePaths} location={location} />

      <SectionContainer
        id='program-section'
        forwardedAs='div'
        faded
        bgColor={colors.pineapple50}
      >
        <Center maxWidth='1220px'>
          <Switcher threshold='768px' space='24px'>
            <div>
              <div>
                {groupedByTimeRangeProgram.length > 0 ? (
                  groupedByTimeRangeProgram.map(([timerange, sessions]) => (
                    timerange.includes(";") ?
                      (<div key={timerange}>
                        <ScheduleCardList time={timerange.split(";")[0]}>
                          {sessions[0].map((session) => (
                            <ScheduleCard
                              id={session.id}
                              key={session.id}
                              to={`/programmation/${slugify(session.title)}/`}
                              title={session.title}
                              content={session.description}
                              place={session.place}
                              time={session.time}
                              type={session.type}
                              categories={session.categories}
                              speakers={session.speakers}
                            />
                          ))}
                        </ScheduleCardList>
                        <ScheduleCardList groupedUp={true} time={timerange.split(";")[1]}>
                          {sessions[1].map((session) => (
                            <ScheduleCard
                              id={session.id}
                              key={session.id}
                              to={`/programmation/${slugify(session.title)}/`}
                              title={session.title}
                              content={session.description}
                              place={session.place}
                              time={session.time}
                              type={session.type}
                              categories={session.categories}
                              speakers={session.speakers}
                            />
                          ))}
                        </ScheduleCardList>
                      </div>
                      ) :
                      (<ScheduleCardList time={timerange}>
                        {sessions.map((session) => (
                          <ScheduleCard
                            id={session.id}
                            key={session.id}
                            to={`/programmation/${slugify(session.title)}/`}
                            title={session.title}
                            content={session.description}
                            place={session.place}
                            time={session.time}
                            type={session.type}
                            categories={session.categories}
                            speakers={session.speakers}
                          />
                        ))}
                      </ScheduleCardList>)
                  ))
                ) : (
                  <NoResults />
                )}
              </div>
            </div>
          </Switcher>
        </Center>
      </SectionContainer>
    </>
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
Program.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      sessionId: PropTypes.string,
    }),
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
    // pageNumber: PropTypes.number,
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
        speakers {
          id
          firstName
          lastName
          biography
          organization
          jobTitle
          photoUrl
        }
        categories: fields {
          ... on Swapcard_MultipleSelectField {
            value
          }
        }
      }
    }
  }
`;
