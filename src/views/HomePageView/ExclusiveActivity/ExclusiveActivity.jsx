// vendors
import React from 'react';
import GatsbyImage from 'gatsby-image';
import { hideVisually } from 'polished';

// utils
import { graphql, useStaticQuery } from 'gatsby';

// styles
import {
  ActivityWrapper,
  activityImage,
  ActivityIntro,
  CTAWrapper,
} from './ExclusiveActivity.styles';

// components
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';

const ExclusiveActivity = () => {
  const data = useStaticQuery(
    graphql`
      query {
        activityPicture: file(
          relativePath: { eq: "img-exclusive-activity.jpg" }
        ) {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 1000
              duotone: { highlight: "#EBEBEB", shadow: "#262626" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  );

  const {
    activityPicture: {
      childImageSharp: { fluid: activityPicture },
    },
  } = data;

  return (
    <ActivityWrapper id='activite'>
      <h2 css={hideVisually}>Activité exclusive</h2>
      <Center maxWidth='850px' gutters='12px' withText>
        <GatsbyImage
          css={activityImage}
          fluid={activityPicture}
          alt='Sortie de Zodiac du WAQ avec vue sur le château Frontenac'
        />
        <ActivityIntro>
          Le WAQ se dépasse cette année en t’offrant une activité exclusive. Les
          places sont <strong>très limitées</strong>, donc n’attends pas pour
          réserver!
        </ActivityIntro>
        <CTAWrapper>
          <Button to='/activite-exclusive/' tag='link' animated>
            Réserver ma place
          </Button>
        </CTAWrapper>
      </Center>
    </ActivityWrapper>
  );
};

export default ExclusiveActivity;
