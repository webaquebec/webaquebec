// vendors
import React, { useEffect, useState } from 'react';
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
import { useProgramFilters } from '../../contexts/ProgramFiltersContext';

// images
import ogImgProgram from '../../images/og/og-img-program-disponible.jpg';

// views
import Hero from '../../views/ProgramPageView/Hero';
import Filters from '../../views/ProgramPageView/Filters';
import NoResults from '../../views/ProgramPageView/NoResults';

// utils
import slugify from '../../utils/strings/slugify';
import breakpointsRange from '../../utils/breakpointsRange';
import { lessThan } from '../../utils/mediaQuery';
import unSlugify from '../../utils/strings/unSlugify';
import { categoriesMap, eventTypesMap } from '../../utils/dataMapping';

// styles
import breakpoints from '../../styles/breakpoints';
import { selfBreakpoints as filtersSelfBreakpoints } from '../../views/ProgramPageView/Filters/Filters.styles';

const SectionContainer = styled(StyledSectionContainer)`
  min-height: 800px;

  margin-top: -40px;
  padding: 0 16px;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [168, 134], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const FiltersWrapper = styled.div`
  max-width: 340px;

  ${lessThan(filtersSelfBreakpoints[0])} {
    max-width: 0;
    margin: 0;
  }
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

  const [datePaths, setDatePaths] = useState([]);
  const [program, setProgram] = useState([]);
  const [lastSelectedSessionId, setLastSelectedSessionId] = useState(null);

  const { state } = location;

  const {
    addFilter,
    updateFilter,
    updateFilterValue,
    applyFilter,
    getFilters,
    uncheckAllFilters,
  } = useProgramFilters();

  /**
   *  Triggered once:
   *    - Re-arrange data from Swapcard the way we want to display it in our template
   *    - Set last selected Session id
   */
  useEffect(() => {
    const getFormattedTime = (value) => {
      // Fix Safari Invalid Date issue
      const formatValue = value.replace(/-/g, '/');
      const options = { hour: '2-digit', minute: '2-digit' };
      const date = new Date(formatValue);
      return date.toLocaleTimeString('fr', options);
    };

    // Re-arrange values from the plannings array the way we want to use it in our template
    const modifiedPlannings = plannings.map((planning) => ({
      time: {
        beginsAt: getFormattedTime(planning.beginsAt),
        endsAt: getFormattedTime(planning.endsAt),
      },
      ...planning,
    }));

    setProgram(modifiedPlannings);

    // Re-arrange event dates the way we want to display them in our template
    const displayableDates = eventDates.map((current, index, array) =>
      index === array.length - 1 ? 'bonus !' : current
    );

    const tempDatePaths = displayableDates.map((date, index) => ({
      date,
      path: pagePaths[index],
    }));

    setDatePaths(tempDatePaths);

    if (state === null) return;

    setLastSelectedSessionId(state.sessionId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize filters
  useEffect(() => {
    const places = [];
    const categories = [];
    const eventTypes = [];

    const addChoices = (value, array) => {
      if (value === null || array.some((v) => v === value)) return;

      array.push(value);
    };

    plannings.forEach((session) => {
      // Get all places for filters
      addChoices(session.place, places);
      // Get all categories for filters
      session.categories.forEach((category) => {
        addChoices(category, categories);
      });
      // Get all types for filters
      addChoices(session.type, eventTypes);
    });

    const filters = getFilters();

    if (filters.length > 0) {
      updateFilter('place', {
        values: places.map((value) => ({
          name: unSlugify(value),
          value,
        })),
      });
      updateFilter('categories', {
        values: categories.map((value) => ({
          name: categoriesMap[value],
          value,
        })),
      });
      updateFilter('type', {
        values: eventTypes.map((value) => ({
          name: eventTypesMap[value],
          value,
        })),
      });

      return;
    }

    addFilter({
      name: 'place',
      title: 'Lieu',
      values: places.map((value) => ({
        name: unSlugify(value),
        value,
      })),
    });
    addFilter({
      name: 'categories',
      title: 'Thématique',
      values: categories.map((value) => ({
        name: categoriesMap[value],
        value,
      })),
    });
    addFilter({
      name: 'type',
      title: 'Type',
      values: eventTypes.map((value) => ({
        name: eventTypesMap[value],
        value,
      })),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plannings]);

  // Scroll to the last selected session
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const anchor = document.querySelector(`#${lastSelectedSessionId}`);

    if (anchor === null) return;

    const offset = anchor.getBoundingClientRect().top + window.scrollY - 140;

    window.scrollTo({ top: offset, behavior: `smooth` });

    // Reset after first update
    setLastSelectedSessionId(null);
  }, [lastSelectedSessionId]);

  // Update filter value
  const handleFilterChange = (event) => {
    const options = {
      value: event.target.value,
      isChecked: event.target.checked,
    };

    updateFilterValue(event.target.name, options);
  };

  // Reset filters
  const handleClickReset = () => {
    uncheckAllFilters();
  };

  const filteredProgram = program
    .filter((session) => applyFilter('place', session.place))
    .filter((session) => applyFilter('categories', session.categories))
    .filter((session) => applyFilter('type', session.type));

  return (
    <>
      <SEO
        title='Programmation'
        description='Plus de 50 conférences sur 3 jours avec des ateliers, du réseautage et une multitude d’activités. Découvre la programmation du Web à Québec.'
        image={ogImgProgram}
      />

      <Hero datePaths={datePaths} location={location} />

      <SectionContainer id='program-section' forwardedAs='div' faded>
        <Center maxWidth='1066px'>
          <Switcher threshold='768px' space='24px'>
            <div>
              <FiltersWrapper>
                <Filters
                  onChange={handleFilterChange}
                  onReset={handleClickReset}
                />
              </FiltersWrapper>

              <div>
                {filteredProgram.length > 0 ? (
                  <ScheduleCardList>
                    {filteredProgram.map((session) => (
                      <ScheduleCard
                        id={session.id}
                        key={session.id}
                        to={`/programmation/${slugify(session.title)}/`}
                        title={session.title}
                        content={session.description}
                        place={session.place}
                        time={
                          pageNumber !== eventDates.length
                            ? session.time
                            : undefined
                        }
                        type={session.type}
                        categories={session.categories}
                        speakers={session.speakers}
                      />
                    ))}
                  </ScheduleCardList>
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
          biography
          organization
          jobTitle
          photoUrl
        }
      }
    }
  }
`;
