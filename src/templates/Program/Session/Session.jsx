// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'styled-components';

// components
import SEO from '../../../components/SEO';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Tag from '../../../components/Tag';
import SpeakerCard from '../../../components/SpeakerCard';
import Cluster from '../../../components/LayoutSections/Cluster';
import Stack from '../../../components/LayoutSections/Stack';

// utils
import slugify from '../../../utils/strings/slugify';
import breakpointsRange from '../../../utils/breakpointsRange';
import { categoriesMap } from '../../../utils/dataMapping';

// images
import IconArrow from '../../../images/IconArrow';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

const backArrow = css`
  transform: rotate(180deg);
`;

const backButton = css`
  margin-right: auto;

  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [32, 16], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [16, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventContainer = styled.div`
  width: 100%;

  background-color: ${colors.peach};
  border: 2px solid ${colors.blueberry};
  border-radius: 16px;

  ${breakpointsRange(
    [
      { prop: 'paddingTop', sizes: [32, 105], bases: [16, 20] },
      { prop: 'paddingBottom', sizes: [16, 120], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const DateTime = styled.div`
  display: flex;

  color: ${colors.blueberry30};
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [18, 18], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

const EventTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;

  color: ${colors.blueberry};
  font-weight: ${fontWeights.ultrabold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [24, 24], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [32, 32], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const EventDescription = styled.div`
  color: ${colors.blueberry30};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [16, 16], bases: [16, 20] },
      { prop: 'lineHeight', sizes: [22, 22], bases: [16, 16], unit: '' },
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

  * {
    margin-block: 0;
  }

  * + * {
    margin-block-start: 1em;
  }

  /**
   *  FIXME: Add to BlockList styles to avoid duplicates
   */
  ul {
    &,
    ul {
      padding-inline-start: 1rem;

      list-style: none;
    }

    li {
      margin-bottom: 16px;
    }

    li::before {
      display: inline-block;

      width: 1em;
      margin-left: -1em;

      color: ${colors.blueberry};
      font-weight: ${fontWeights.bold};

      content: '•';
    }

    li li::before {
      content: '○';
    }

    li li li::before {
      content: '-';
    }
  }

  ol {
    &,
    ol {
      padding-inline-start: 1rem;

      list-style: none;

      counter-reset: li;
    }

    ol,
    li:not(:first-of-type) {
      ${breakpointsRange(
        [{ prop: 'marginTop', sizes: [14, 16], bases: [16, 20] }],
        breakpoints.spacings
      )};
    }

    li {
      counter-increment: li;
    }

    li::before {
      display: inline-block;

      width: 1.3em;
      margin-left: -1.3em;

      color: ${colors.blueberry};
      font-weight: ${fontWeights.bold};

      direction: rtl;

      content: '.' counter(li);
    }

    li li::before {
      content: '.' counter(li, lower-alpha);
    }

    li li li::before {
      width: 1.8em;
      margin-left: -1.8em;

      content: '(' counter(li) ')';
    }
  }
`;

/**
 * Template used to build each session page
 * @param {Object} data — Data fetched from Swapcard API at build time
 * @param {Object} pageContext — Received context from the automatically created pages
 * (@Link gatsby/createScheduleSessionPages.js) and use that as variables GraphQL query.
 */
const Session = ({ data, pageContext: { pageNumber, isLastPage } }) => {
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
    ...planning,
    edition: getDateYear(planning.beginsAt),
    date: getFormattedLocaleDate(planning.beginsAt),
    time: {
      beginsAt: getFormattedTime(planning.beginsAt),
      endsAt: getFormattedTime(planning.endsAt),
    },
    type: slugify(planning.type),
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

      <Center maxWidth='1130px' gutters='var(--container-gutter)' intrinsic>
        <Button
          to={pagePath}
          tag='link'
          iconFirst
          renderIcon={<IconArrow css={backArrow} />}
          state={{ sessionId: id }}
          css={backButton}
        >
          Retour à la programmation
        </Button>

        <EventContainer>
          <Center maxWidth='680px' gutters='var(--container-gutter)'>
            <Stack space='40px'>
              {!isLastPage && (
                <DateTime>
                  {date}&nbsp;&nbsp;|&nbsp;&nbsp;
                  {`de ${time.beginsAt} à ${time.endsAt}`}
                </DateTime>
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
                    {categories
                      .filter((category) => categoriesMap[category.value])
                      .map((category) => (
                        <Tag
                          key={`category-${category.value}`}
                          category={category.value}
                        />
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
        categories: fields {
          ... on Swapcard_MultipleSelectField {
            value
          }
        }
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
                duotone: { highlight: "#EBEBEB", shadow: "#262626" }
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
