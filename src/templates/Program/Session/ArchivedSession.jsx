// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MainTemplate from './MainTemplate';

/**
 * Template used to build each session page
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const ArchivedSession = ({ data, pageContext }) => {
  const { edition2023, edition2022, edition2021 } = data;

  const plannings = [
    ...edition2023.plannings,
    ...edition2022.plannings,
    ...edition2021.plannings,
  ].map((p) => p.node);

  return <MainTemplate data={plannings} pageContext={pageContext} />;
};

ArchivedSession.propTypes = {
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
    pageNumber: PropTypes.number,
    planningIds: PropTypes.arrayOf(PropTypes.string),
    isLastPage: PropTypes.bool,
  }).isRequired,
};

export default ArchivedSession;

export const archivedSessionQuery = graphql`
  query ArchivedSessionById($planningIds: [String]) {
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
          title
          titleTranslations {
            language
            value
          }
          totalAttendees
          type
          speakers {
            id
            firstName
            lastName
            biography
            email
            websiteUrl
            organization
            jobTitle
            socialNetworks {
              profile
              type
            }
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
          title
          titleTranslations {
            language
            value
          }
          totalAttendees
          type
          speakers {
            id
            firstName
            lastName
            biography
            email
            websiteUrl
            organization
            jobTitle
            socialNetworks {
              profile
              type
            }
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
          title
          titleTranslations {
            language
            value
          }
          totalAttendees
          type
          speakers {
            id
            firstName
            lastName
            biography
            email
            websiteUrl
            organization
            jobTitle
            socialNetworks {
              profile
              type
            }
            photoUrl
          }
        }
      }
    }
  }
`;
