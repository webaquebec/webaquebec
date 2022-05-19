// vendors
import React from 'react';

// components
import { graphql, useStaticQuery } from 'gatsby';
import LazyAnimation from '../../../../components/LazyAnimation';

// images
import vectorStickerWindowFrame from '../../../../images/stickers/vectorStickerWindowFrame.svg';
import vectorStickerSparkleHeart from '../../../../images/stickers/vectorStickerSparkleHeart.svg';
import vectorStickerMegaphone from '../../../../images/stickers/vectorStickerMegaphone.svg';
import vectorTagInnovation from '../../../../images/vectorTagInnovation.svg';
import vectorTagDesign from '../../../../images/vectorTagDesign.svg';
import vectorTagDevelopment from '../../../../images/vectorTagDevelopment.svg';
import vectorTagCommMktg from '../../../../images/vectorTagCommMktg.svg';

// styles
import {
  Container,
  SpeakerPicture,
  SpeakerSticker,
  SpeakerTag,
  Wrapper,
} from './SpeakersGraphics.styles';
import { easing } from '../../../../styles/animation';
import { lessThan } from '../../../../utils/mediaQuery';

const SpeakersGraphics = () => {
  const data = useStaticQuery(
    graphql`
      query {
        speaker1Picture: file(
          relativePath: { eq: "img-speaker-draplin-duo-square.png" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 319) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        speaker2Picture: file(
          relativePath: { eq: "img-speaker-2-duo-square.png" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 319) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        speaker3Picture: file(
          relativePath: { eq: "img-speaker-vitali-duo-square.png" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 319) {
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
          <SpeakerSticker
            src={vectorStickerWindowFrame}
            alt=''
            role='presentation'
            $minWidth='134'
            $maxWidth='181'
            css={`
              transform: translateX(85%);
            `}
          />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${1 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '22deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              bottom: -36px;
              right: 5%;
              z-index: 2;

              ${lessThan(420)} {
                right: 15%;
              }
            `}
          >
            <SpeakerTag
              src={vectorTagInnovation}
              alt=''
              role='presentation'
              $minWidth='119'
              $maxWidth='225'
            />
          </LazyAnimation>
        </div>

        <div>
          <SpeakerPicture fluid={speaker1Picture} alt='' role='presentation' />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${2 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '-22deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              bottom: 90px;
              left: -17%;
              z-index: 2;
            `}
          >
            <SpeakerTag
              src={vectorTagDesign}
              alt=''
              role='presentation'
              $minWidth='95'
              $maxWidth='145'
            />
          </LazyAnimation>

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${8 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '-12deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              bottom: -45%;
              left: 6%;
              z-index: 2;

              ${lessThan(420)} {
                bottom: -30%;
              }
            `}
          >
            <SpeakerSticker
              src={vectorStickerSparkleHeart}
              alt=''
              role='presentation'
              $minWidth='139'
              $maxWidth='231'
            />
          </LazyAnimation>
        </div>

        <div>
          <SpeakerPicture fluid={speaker2Picture} alt='' role='presentation' />
        </div>

        <div>
          <SpeakerPicture fluid={speaker3Picture} alt='' role='presentation' />

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${3 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '22deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              top: -46px;
              left: -11%;
              z-index: 2;
            `}
          >
            <SpeakerTag
              src={vectorTagDevelopment}
              alt=''
              role='presentation'
              $minWidth='194'
              $maxWidth='311'
            />
          </LazyAnimation>

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${4 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '-11deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              top: 75px;
              right: 3%;
              z-index: 2;

              ${lessThan(420)} {
                top: 62px;
                right: 14%;
              }
            `}
          >
            <SpeakerTag
              src={vectorTagCommMktg}
              alt=''
              role='presentation'
              $minWidth='169'
              $maxWidth='268'
            />
          </LazyAnimation>

          <LazyAnimation
            transition={{
              duration: '400ms',
              delay: `${5 * 300}ms`,
              easing: easing.outCustom,
              scale: { initial: '0', final: '1' },
              rotate: {
                initial: '-12deg',
                final: '0deg',
              },
            }}
            css={`
              position: absolute;
              bottom: -52%;
              right: 22%;
              z-index: 2;
            `}
          >
            <SpeakerSticker
              src={vectorStickerMegaphone}
              alt=''
              role='presentation'
              $minWidth='128'
              $maxWidth='247'
            />
          </LazyAnimation>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SpeakersGraphics;
