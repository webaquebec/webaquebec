// vendors
import React from 'react';

// components
import { graphql, useStaticQuery } from 'gatsby';
import LazyAnimation from '../../../../components/LazyAnimation';

// utils
import { lessThan } from '../../../../utils/mediaQuery';

// styles
import {
  Container,
  SpeakerPicture,
  SpeakerTag,
  Wrapper,
} from './SpeakersGraphics.styles';
import { easing } from '../../../../styles/animation';

const SpeakersGraphics = () => {
  const data = useStaticQuery(
    graphql`
      query {
        speaker1Picture: file(
          relativePath: { eq: "img-speaker-draplin-600x400.jpg" }
        ) {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 400
              duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        speaker2Picture: file(
          relativePath: { eq: "img-speaker-2-600x400.jpg" }
        ) {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 400
              duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        speaker3Picture: file(
          relativePath: { eq: "img-speaker-3-600x400.jpg" }
        ) {
          childImageSharp {
            fluid(
              quality: 100
              maxWidth: 400
              duotone: { highlight: "#EBEBEB", shadow: "#00086B" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  );

  const {
    speaker1Picture: {
      childImageSharp: { fluid: speaker1Picture },
    },
    speaker2Picture: {
      childImageSharp: { fluid: speaker2Picture },
    },
    speaker3Picture: {
      childImageSharp: { fluid: speaker3Picture },
    },
  } = data;

  return (
    <Wrapper>
      <Container>
        <div>
          <SpeakerPicture fluid={speaker1Picture} alt='' role='presentation' />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${1 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '0deg',
                final: '-14deg',
              },
            }}
            css={`
              position: absolute;
              top: -25px;
              right: 5%;
              z-index: 2;

              ${lessThan(420)} {
                right: 15%;
              }
            `}
          >
            <SpeakerTag>
              <span>innovation</span>
            </SpeakerTag>
          </LazyAnimation>

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${2 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '0deg',
                final: '-8deg',
              },
            }}
            css={`
              position: absolute;
              bottom: 65px;
              left: -17%;
              z-index: 2;
            `}
          >
            <SpeakerTag>
              <span>design</span>
            </SpeakerTag>
          </LazyAnimation>
        </div>

        <div>
          <SpeakerPicture fluid={speaker2Picture} alt='' role='presentation' />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${3 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '8deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              top: 27%;
              left: -37%;
              z-index: 2;
            `}
          >
            <SpeakerTag>
              <span>comm / mktg</span>
            </SpeakerTag>
          </LazyAnimation>
        </div>

        <div>
          <SpeakerPicture fluid={speaker3Picture} alt='' role='presentation' />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${4 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '-8deg',
                final: '12deg',
              },
            }}
            css={`
              position: absolute;
              top: 65px;
              right: -10%;
              z-index: 2;

              ${lessThan(420)} {
                top: 33px;
                right: 6%;
              }
            `}
          >
            <SpeakerTag>
              <span>développement</span>
            </SpeakerTag>
          </LazyAnimation>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SpeakersGraphics;
