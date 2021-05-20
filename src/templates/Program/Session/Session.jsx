// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { useQuery } from '@apollo/client';

// Client queries
// import clientSwapcard from '../../../../apollo/clientSwapcard';
// import sessionByIdQuery from '../../../../graphql/swapcard/get-session-by-id-query.gql';

// components
import Layout from '../../../components/Layout';
import SectionContainer from '../../../components/SectionContainer';

// styles
// ...

/**
 * Template used to build each session page
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const Session = ({
  data,
  // pageContext: { eventId, page, pageSize, planningIds },
}) => {
  /**
   * Query to fetch data from Swapcard API at client side only.
   * Useful if we want to get up-to-date data that may change during an event (e.g. time, room)
   */
  // const { error, data: dataClient } = useQuery(sessionByIdQuery, {
  //   client: clientSwapcard,
  //   variables: { eventId, page, pageSize, planningIds },
  // });

  // if (error) {
  //   console.log('ERROR', error);
  // } else {
  //   console.log(dataClient);
  // }

  return (
    <Layout>
      <SectionContainer forwardedAs='div' faded padded>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </SectionContainer>
    </Layout>
  );
};

Session.propTypes = {
  data: PropTypes.shape({}).isRequired,
  pageContext: PropTypes.shape({
    eventId: PropTypes.string,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    planningIds: PropTypes.arrayOf(PropTypes.string),
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
          email
          organization
          jobTitle
          photoUrl
          # photoUrlSharp {
          #   childImageSharp {
          #     fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
          #       ...GatsbyImageSharpFluid_withWebp
          #     }
          #   }
          # }
        }
      }
    }
  }
`;
