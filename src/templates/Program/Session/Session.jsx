// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';
// import { useQuery } from '@apollo/client';

// Client queries
// import clientSwapcard from '../../../../apollo/clientSwapcard';
// import sessionByIdQuery from '../../../../graphql/swapcard/get-session-by-id-query.gql';

// components
import SEO from '../../../components/SEO';
import Center from '../../../components/LayoutSections/Center';
import Hero from '../../../components/Hero';
import Button from '../../../components/Button';
import Tag from '../../../components/Tag';
import SpeakerCard from '../../../components/SpeakerCard';
import SectionContainer from '../../../components/SectionContainer';
import Cluster from '../../../components/LayoutSections/Cluster';
import Stack from '../../../components/LayoutSections/Stack';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';

// images
import IconArrow from '../../../images/IconArrow';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';

// styles
const Container = styled(SectionContainer)`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [150, 150], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const heroWrapper = css`
  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [60, 80], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const backArrow = css`
  transform: rotate(180deg);
`;

const backButton = css`
  margin-right: auto;

  ${breakpointsRange(
    [{ prop: 'marginBottom', sizes: [40, 60], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const EventContainer = styled.div`
  width: 100%;

  background-color: ${colors.white};
  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [16, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;

  color: ${colors.bleu80};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 32], bases: [16, 20] },
      // { prop: 'marginBottom', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventDescription = styled.div`
  color: ${colors.gris90};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 22], bases: [16, 16], unit: '' },
      // { prop: 'marginBottom', sizes: [24, 40], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  > :first-child {
    margin-top: 0;
    padding-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

/**
 * Template used to build each session page
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const Session = ({ data, pageContext: { pageNumber, isLastPage } }) => {
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

  const {
    swapcard: { plannings },
  } = data;

  // Fix Safari Invalid Date issue
  const formatDateStr = (value) => value.replace(/-/g, '/');

  const getFormattedLocaleDate = (value) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const date = new Date(formatDateStr(value));
    return date.toLocaleDateString('fr-ca', options);
  };

  const getFormattedTime = (value) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    const date = new Date(formatDateStr(value));
    return date.toLocaleTimeString('fr', options);
  };

  const getDateYear = (value) => {
    const date = new Date(formatDateStr(value));
    return date.getFullYear();
  };

  // Re-arrange values from the plannings array the way we want to use it in our template
  const modifiedPlannings = plannings.map((planning) => ({
    edition: getDateYear(planning.beginsAt),
    date: getFormattedLocaleDate(planning.beginsAt),
    time: {
      beginsAt: getFormattedTime(planning.beginsAt),
      endsAt: getFormattedTime(planning.endsAt),
    },
    ...planning,
  }));

  const session = modifiedPlannings[0];

  const {
    id,
    edition,
    date,
    time,
    title,
    description,
    htmlDescription,
    type,
    place,
    categories,
    speakers,
  } = session;

  const pagePath =
    pageNumber === 1
      ? `/programmation/${edition}`
      : `/programmation/${edition}/${pageNumber}`;

  return (
    <>
      <SEO title={title} description={description} />

      <Center
        css={heroWrapper}
        maxWidth='1064px'
        gutters='var(--container-gutter)'
        intrinsic
      >
        <Hero title='programmation' displayYear />
      </Center>

      <Container forwardedAs='div' faded padded>
        <Center maxWidth='1064px' gutters='var(--container-gutter)' intrinsic>
          <Button
            to={pagePath}
            tag='link'
            outlined
            iconFirst
            renderIcon={<IconArrow css={backArrow} />}
            state={{ sessionId: id }}
            css={backButton}
          >
            Retour à la programmation
          </Button>

          <EventContainer>
            <Center maxWidth='645px' gutters='var(--container-gutter)'>
              <Stack space='40px'>
                {!isLastPage && (
                  <Cluster>
                    <div>
                      <Tag outlined>{date}</Tag>
                      <Tag
                        outlined
                      >{`de ${time.beginsAt} à ${time.endsAt}`}</Tag>
                    </div>
                  </Cluster>
                )}

                <div>
                  <EventTitle>{title}</EventTitle>

                  {htmlDescription && (
                    <EventDescription
                      dangerouslySetInnerHTML={{ __html: htmlDescription }}
                    />
                  )}
                </div>

                {(categories.length > 0 || type || place) && (
                  <Cluster>
                    <div>
                      {categories.map((category) => (
                        <Tag key={`category-${category}`} category={category} />
                      ))}

                      {type && <Tag eventType={type} />}

                      {place && <Tag place={place} />}
                    </div>
                  </Cluster>
                )}

                {speakers.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
              </Stack>
            </Center>
          </EventContainer>
        </Center>
      </Container>
    </>
  );
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
              fixed(width: 100, height: 100, quality: 90) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  }
`;
