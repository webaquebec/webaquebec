// vendors
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// utils
import { lessThan } from '../../../utils/mediaQuery';

// images
import vectorStickerWindowFrame from '../../../images/stickers/vectorStickerWindowFrame.svg';
import vectorStickerSparkleHeart from '../../../images/stickers/vectorStickerSparkleHeart.svg';
import vectorStickerMegaphone from '../../../images/stickers/vectorStickerMegaphone.svg';
import vectorTagInnovation from '../../../images/vectorTagInnovation.svg';
import vectorTagDesign from '../../../images/vectorTagDesign.svg';
import vectorTagDevelopment from '../../../images/vectorTagDevelopment.svg';
import vectorTagCommMktg from '../../../images/vectorTagCommMktg.svg';

// components
import Button from '../../../components/Button';
import Center from '../../../components/LayoutSections/Center';
import Switcher from '../../../components/LayoutSections/Switcher';
import LazyAnimation from '../../../components/LazyAnimation';

// styles
import {
  SectionContainer,
  SpeakersContent,
  SpeakersTitle,
  SpeakersIntro,
  SpeakersGraphics,
  SpeakersGraphicsWrapper,
  SpeakersPicture,
  SpeakersSticker,
  SpeakersTag,
} from './SpeakersSection.styles';
import { easing } from '../../../styles/animation';

const SpeakersSection = () => {
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
    <SectionContainer>
      <Center maxWidth='1080px' gutters='50px'>
        <Switcher threshold='854px' space='2rem' limit={2}>
          <div>
            <SpeakersContent>
              <SpeakersTitle>
                Vous aimeriez être
                <br /> <span>conférencier</span> en 2022&nbsp;?
              </SpeakersTitle>

              <SpeakersIntro>
                On veut t’entendre au WAQ! Tu souhaites transmettre ton
                expertise sur un sujet qui te passionne relié au développement,
                à l’innovation, à la communication et au marketing ou au design?
                C’est le temps de soumettre ta candidature!
              </SpeakersIntro>

              <Button
                primary
                to='https://yr21i4wwzuv.typeform.com/to/QcCM10Cx?utm_source=website&utm_medium=homepage&utm_campaign=appel-a-conferencier&utm_id=ctp'
                tag='href'
                rel='noopener noreferrer'
                target='_blank'
                animated
              >
                Ma candidature
              </Button>
            </SpeakersContent>

            <SpeakersGraphics>
              <SpeakersGraphicsWrapper>
                <div>
                  <SpeakersSticker
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
                    <SpeakersTag
                      src={vectorTagInnovation}
                      alt=''
                      role='presentation'
                      $minWidth='119'
                      $maxWidth='225'
                    />
                  </LazyAnimation>
                </div>

                <div>
                  <SpeakersPicture
                    fluid={speaker1Picture}
                    alt=''
                    role='presentation'
                  />

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
                    <SpeakersTag
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
                    <SpeakersSticker
                      src={vectorStickerSparkleHeart}
                      alt=''
                      role='presentation'
                      $minWidth='139'
                      $maxWidth='231'
                    />
                  </LazyAnimation>
                </div>

                <div>
                  <SpeakersPicture
                    fluid={speaker2Picture}
                    alt=''
                    role='presentation'
                  />
                </div>

                <div>
                  <SpeakersPicture
                    fluid={speaker3Picture}
                    alt=''
                    role='presentation'
                  />

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
                    <SpeakersTag
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
                    <SpeakersTag
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
                    <SpeakersSticker
                      src={vectorStickerMegaphone}
                      alt=''
                      role='presentation'
                      $minWidth='128'
                      $maxWidth='247'
                    />
                  </LazyAnimation>
                </div>
              </SpeakersGraphicsWrapper>
            </SpeakersGraphics>
          </div>
        </Switcher>
      </Center>
    </SectionContainer>
  );
};

export default SpeakersSection;
