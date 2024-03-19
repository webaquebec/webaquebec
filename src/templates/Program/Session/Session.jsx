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
const Session = ({ data, pageContext }) => {
  const {
    swapcard: { plannings },
  } = data;

  return <MainTemplate data={plannings} pageContext={pageContext} />;
};

Session.propTypes = {
  data: PropTypes.shape({
    swapcard: PropTypes.shape({
      plannings: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    eventId: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageNumber: PropTypes.number,
    planningIds: PropTypes.arrayOf(PropTypes.string),
    isLastPage: PropTypes.bool,
  }).isRequired,
};

export default Session;

export const sessionQuery = graphql`
  query SessionById(
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
      ) {
        id
        beginsAt
        endsAt
        categories
        configuration {
          maxSeats
        }
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
        twitterHashtag
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
          photoUrlSharp {
            childImageSharp {
              fixed(
                width: 100
                height: 100
                quality: 90
                duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
              ) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
