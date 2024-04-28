// vendors
import React, { Fragment, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// components
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import ScheduleCardList from '../../components/ScheduleCardList';
import ScheduleCard from '../../components/ScheduleCardList/ScheduleCard';

// views
import Hero from '../../views/ProgramPageView/Hero';
import NoResults from '../../views/ProgramPageView/NoResults';

// utils
import slugify from '../../utils/strings/slugify';
import { categoriesMap } from '../../utils/dataMapping';

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
        .filter((category) => categoriesMap[category])
        .sort(),
      type: slugify(planning.type),
      time: {
        beginsAt: getFormattedTime(planning.beginsAt),
        endsAt: getFormattedTime(planning.endsAt),
      },
    }));

    return modifiedPlannings;
  }, [plannings]);

  const groupedByTimeProgram = useMemo(
    () =>
      Object.entries(
        program.reduce((acc, current) => {
          const { beginsAt } = current.time;
          if (!acc[beginsAt]) {
            acc[beginsAt] = [];
          }
          acc[beginsAt].push(current);
          return acc;
        }, {})
      ),
    [program]
  );

  const sortSessionsByPlace = useCallback(
    (sessions) => sessions.sort((a, b) => (a.place <= b.place ? -1 : 1)),
    []
  );

  // FIXME: A little bit of refactor here is needed in order to ease comprehension and future modifications
  const groupedByTimeRangeProgram = useMemo(() => {
    const output = {};

    for (let i = 0; i < groupedByTimeProgram.length; i += 1) {
      const time = groupedByTimeProgram[i][0];
      const sessions = groupedByTimeProgram[i][1];
      const numberOfSessionsAtTimeI = sessions.length;

      // If could be grouped down check sessions for the next available time
      if (numberOfSessionsAtTimeI >= 4 && groupedByTimeProgram[i + 1]) {
        const timeI2 = groupedByTimeProgram[i + 1][0];
        const sessionsI2 = groupedByTimeProgram[i + 1][1];
        const numberOfSessionsAtTimeI2 = sessionsI2.length;

        // If sessions found for the next available time could also be grouped down
        if (numberOfSessionsAtTimeI2 >= 4) {
          // Fill in missing sessions
          const sessionsPlaces = sessions.map((session) => session.place);
          const sessionsI2Places = sessionsI2.map((session) => session.place);
          const allPlaces = [
            ...new Set([sessionsPlaces, sessionsI2Places].flat()).values(),
          ];

          const missingPlacesForSessions = allPlaces.filter(
            (place) => !sessionsPlaces.includes(place)
          );
          const missingPlacesForSessionsI2 = allPlaces.filter(
            (place) => !sessionsI2Places.includes(place)
          );

          missingPlacesForSessions.forEach((place) =>
            sessions.push({
              place,
              title: 'Aucune activité',
              time,
            })
          );
          missingPlacesForSessionsI2.forEach((place) =>
            sessionsI2.push({
              place,
              title: 'Aucune activité',
              time: timeI2,
            })
          );

          // Group them down together
          output[`${time};${timeI2}`] = [
            sortSessionsByPlace(sessions),
            sortSessionsByPlace(sessionsI2),
          ];

          i += 1;
        } else {
          output[time] = sortSessionsByPlace(sessions);
        }
      } else {
        output[time] = sortSessionsByPlace(sessions);
      }
    }
    return Object.entries(output);
  }, [groupedByTimeProgram, sortSessionsByPlace]);

  return (
    <>
      <SEO
        title='Programmation'
        description='Plus de 50 conférences sur 3 jours avec des ateliers, du réseautage et une multitude d’activités. Découvre la programmation du Web à Québec.'
      />

      <Hero datePaths={datePaths} location={location} />

      <Center maxWidth='1320px' gutters='16px'>
        {groupedByTimeRangeProgram.length > 0 ? (
          groupedByTimeRangeProgram.map(([timerange, sessions]) => (
            <Fragment key={timerange}>
              {timerange.includes(';') ? (
                <>
                  <ScheduleCardList groupedDown time={timerange.split(';')[0]}>
                    {sessions[0].map((session) => (
                      <ScheduleCard
                        id={session.id}
                        key={session.id}
                        to={`/programmation/${slugify(session.title)}/`}
                        title={session.title}
                        place={session.place}
                        time={session.time}
                        type={session.type}
                        categories={session.categories}
                        speakers={session.speakers}
                        groupedDown
                      />
                    ))}
                  </ScheduleCardList>
                  <ScheduleCardList groupedUp time={timerange.split(';')[1]}>
                    {sessions[1].map((session) => (
                      <ScheduleCard
                        id={session.id}
                        key={session.id}
                        to={`/programmation/${slugify(session.title)}/`}
                        title={session.title}
                        place={session.place}
                        time={session.time}
                        type={session.type}
                        categories={session.categories}
                        speakers={session.speakers}
                        groupedUp
                      />
                    ))}
                  </ScheduleCardList>
                </>
              ) : (
                <ScheduleCardList time={timerange}>
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
                </ScheduleCardList>
              )}
            </Fragment>
          ))
        ) : (
          <NoResults />
        )}
      </Center>
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
