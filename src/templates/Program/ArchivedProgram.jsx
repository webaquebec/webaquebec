// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from './MainTemplate';

/**
 * Template used to display daily plannings from archived JSON files
 * @param {Object} data — Data fetched from archived JSON files at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * {@Link gatsby/createProgramSessionPages.js} and use that as variables GraphQL query.
 */
const ArchivedProgram = ({ location, data, pageContext }) => {
  const { edition2023, edition2022, edition2021 } = data;

  const plannings = [
    ...edition2023.plannings,
    ...edition2022.plannings,
    ...edition2021.plannings,
  ].map((p) => p.node);

  return (
    <MainTemplate
      location={location}
      data={plannings}
      pageContext={pageContext}
    />
  );
};

/**
 * See existing PropTypes validator
 * https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
ArchivedProgram.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({
      sessionId: PropTypes.string,
    }),
  }).isRequired,
  data: PropTypes.shape({
    edition2023: PropTypes.shape({
      plannings: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    edition2022: PropTypes.shape({
      plannings: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    edition2021: PropTypes.shape({
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

export default ArchivedProgram;

/**
 * Query to get archived schedules from a list of IDs
 * @param {string[]} $planningIds — Planning Ids we want to filter from
 * See @link gatsby/createScheduleSessionPages.js
 *
 * NOTE: As weirdly as it looks, we can't use string interpolation in graphql query with Gatsby
 * in order to avoid code repetition here.
 * We can't use GraphQL Fragments either since the query doesn't allow it.
 */
export const archivedProgramQuery = graphql`
  query ArchivedProgramById($planningIds: [String]) {
    edition2023: allProgram2023Json(
      filter: { id: { in: $planningIds } }
      sort: { fields: beginsAt, order: ASC }
    ) {
      plannings: edges {
        node {
          id
          beginsAt
          endsAt
          categories
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
        }
      }
    }
    edition2022: allProgram2022Json(
      filter: { id: { in: $planningIds } }
      sort: { fields: beginsAt, order: ASC }
    ) {
      plannings: edges {
        node {
          id
          beginsAt
          endsAt
          categories
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
        }
      }
    }
    edition2021: allProgram2021Json(
      filter: { id: { in: $planningIds } }
      sort: { fields: beginsAt, order: ASC }
    ) {
      plannings: edges {
        node {
          id
          beginsAt
          endsAt
          categories
          description
          descriptionTranslations {
            language
            value
          }
          htmlDescription
          isPrivate
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
        }
      }
    }
  }
`;
