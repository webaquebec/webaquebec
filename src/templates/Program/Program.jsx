// vendors
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

// components
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Center from '../../components/LayoutSections/Center';
import ScheduleCardList from '../../components/ScheduleCardList';
import ScheduleCard from '../../components/ScheduleCardList/ScheduleCard';
import StyledSectionContainer from '../../components/SectionContainer';
import Switcher from '../../components/LayoutSections/Switcher';

// images
import ogImgProgram from '../../images/og/og-img-program-disponible.jpg';

// views
import Hero from '../../views/ProgramPageView/Hero';
import Filters from '../../views/ProgramPageView/Filters';

// utils
import slugify from '../../utils/strings/slugify';
import breakpointsRange from '../../utils/breakpointsRange';
import unSlugify from '../../utils/strings/unSlugify';
import { categoriesMap, eventTypesMap } from '../../utils/dataMapping';

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

const FiltersWrapper = styled.div`
  max-width: 320px;
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

  const [filters, setFilters] = useState({});
  const [datePaths, setDatePaths] = useState([]);
  const [program, setProgram] = useState([]);

  // Triggered once. Re-arrange data from Swapcard the way we want to display it in our template
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize filters
  useEffect(() => {
    const places = [];
    const categories = [];
    const eventTypes = [];

    const addChoices = (value, array) => {
      if (value === null || array.some((t) => t.value === value)) return;

      const current = {
        value,
        isChecked: false,
      };
      array.push(current);
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

    const updatedFilters = {
      place: {
        title: 'Lieu',
        values: places.map((place) => ({
          name: unSlugify(place.value),
          ...place,
        })),
      },
      categories: {
        title: 'Thématique',
        values: categories.map((category) => ({
          name: categoriesMap[category.value],
          ...category,
        })),
      },
      type: {
        title: 'Type',
        values: eventTypes.map((type) => ({
          name: eventTypesMap[type.value],
          ...type,
        })),
      },
    };

    setFilters(updatedFilters);
  }, [plannings]);

  // Update filters
  const handleFilterChange = (event) => {
    const filter = filters[event.target.name];

    const values = filter.values.reduce((acc, current) => {
      const choice = { ...current };
      if (current.value === event.target.value) {
        choice.isChecked = event.target.checked;
      }
      acc.push(choice);
      return acc;
    }, []);

    // const index = filters.findIndex((e) => e.name === filter.name);
    // const updatedFilters = [...filters];
    // updatedFilters[index] = { ...updatedFilters[index], choices };
    const updatedFilters = { ...filters };
    updatedFilters[event.target.name] = {
      ...updatedFilters[event.target.name],
      values,
    };

    setFilters(updatedFilters);
  };

  // Reset filters
  const handleClickReset = () => {
    const filtersEntries = Object.entries(filters);
    const updatedFilters = {};
    filtersEntries.forEach(([key, entry]) => {
      const { values } = entry;

      // Uncheck all
      const updatedValues = values.map((value) => ({
        ...value,
        isChecked: false,
      }));

      updatedFilters[key] = {
        ...entry,
        values: updatedValues,
      };
    });

    setFilters(updatedFilters);
  };

  // Filter function that returns true whether all choices are unchecked or at least one of them is checked
  const applyFilter = (key, session) => {
    const allUnchecked = filters[key].values.every((c) => !c.isChecked);

    const choiceFound = filters[key].values.some((choice) => {
      if (Array.isArray(session[key])) {
        return choice.isChecked && session[key].includes(choice.value);
      }
      return choice.isChecked && choice.value === session[key];
    });

    return allUnchecked || choiceFound;
  };

  return (
    <Layout location={location}>
      <SEO
        title='Programmation'
        description='Plus de 50 conférences sur 3 jours avec des ateliers, du réseautage et une multitude d’activités. Découvre la programmation du Web à Québec.'
        image={ogImgProgram}
      />

      <Hero datePaths={datePaths} />

      <SectionContainer forwardedAs='div' faded>
        <Center maxWidth='1066px' gutters='16px'>
          <Switcher threshold='768px' space='1.5rem'>
            <div>
              <FiltersWrapper>
                <Filters
                  filters={filters}
                  onChange={handleFilterChange}
                  onReset={handleClickReset}
                />
              </FiltersWrapper>
              <div>
                <ScheduleCardList>
                  {program
                    .filter((session) => applyFilter('place', session))
                    .filter((session) => applyFilter('categories', session))
                    .filter((session) => applyFilter('type', session))
                    .map((session) => (
                      <ScheduleCard
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
              </div>
            </div>
          </Switcher>
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
