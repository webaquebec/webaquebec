// vendors
import React, { useCallback, useState } from 'react';
import { hideVisually } from 'polished';
import { isSafari, isDesktop } from 'react-device-detect';

// styles
import {
  ContactTitle,
  ContactText,
  MediaText,
  MediaList,
  ContentContainer,
  blockContainerStyle,
  SnakyButton,
} from './SocialNews.styles';
import colors from '../../styles/colors';

// components
import Switcher from '../LayoutSections/Switcher';
import Center from '../LayoutSections/Center';
import Paper from '../Paper';
import Button from '../Button';

// images
import facebook from '../../images/socialMedia/facebook.svg';
import twitter from '../../images/socialMedia/twitter.svg';
import instagram from '../../images/socialMedia/instagram.svg';
import linkedin from '../../images/socialMedia/linkedin.svg';
import elevation from '../../styles/elevation';
import { easing, speed } from '../../styles/animation';
import SnakeGame from '../SnakeGame';
import { useGlobalContext } from '../../contexts/GlobalContext';

const SocialNews = () => {
  const [flip, setFlip] = useState(false);

  const { setPauseAnimation } = useGlobalContext();

  const socialMedia = [
    {
      name: 'Facebook',
      img: facebook,
      link: 'https://www.facebook.com/webaquebec/',
    },
    {
      name: 'Twitter',
      img: twitter,
      link: 'https://twitter.com/webaquebec',
    },
    {
      name: 'Instagram',
      img: instagram,
      link: 'https://www.instagram.com/webaquebec/',
    },
    {
      name: 'Linkedin',
      img: linkedin,
      link: 'https://www.linkedin.com/company/web-qu-bec',
    },
  ];

  const handleClick = useCallback(() => {
    setFlip((prev) => !prev);
  }, []);

  React.useEffect(() => {
    if (flip) {
      setPauseAnimation(true);
      return;
    }
    setPauseAnimation(false);
  }, [flip, setPauseAnimation]);

  return (
    <Switcher
      threshold='768px'
      space='calc(var(--container-gutter) * 2)'
      limit={2}
    >
      <div>
        <Paper
          lightColor={colors.earlyDawn}
          darkColor={colors.bleu100}
          rounded
          overlaid
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic css={ContentContainer}>
            <ContactTitle color={colors.gris90}>
              Suis-nous sur les médias sociaux
            </ContactTitle>

            <ContactText css={MediaText}>
              Annonces, événements, concours, anecdotes, contenu inédit et une
              belle communauté t’y attendent.
            </ContactText>

            <MediaList>
              {socialMedia.map((media) => (
                <li key={`media-item-${media.name}`}>
                  <a
                    href={media.link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <img src={media.img} alt={media.name} />
                  </a>
                </li>
              ))}
            </MediaList>
          </Center>
        </Paper>

        <Paper
          lightColor={colors.bleu100}
          darkColor={colors.earlyDawn}
          elevation={elevation.large}
          rounded
          css={`
            --opacity: 1;

            ${blockContainerStyle};

            transform: ${flip ? `rotateY(180deg)` : `rotateY(0deg)`};
            transform-style: ${!isSafari ? `preserve-3d` : ``};

            transition: transform ${speed.slow} ${easing.outBack};

            /* will-change: transform; */

            z-index: 0;

            :hover {
              --opacity: 0.3;
            }
          `}
        >
          <div
            css={`
              position: relative;
              /* This part controls the flip */
              backface-visibility: hidden;
            `}
          >
            <Center maxWidth='290px' intrinsic css={ContentContainer}>
              <ContactTitle>Ne manque rien</ContactTitle>

              <ContactText>
                Pour des nouveautés, des promotions, du contenu exclusif et une
                bonne dose de WAQ, abonne-toi à notre infolettre.
              </ContactText>

              <Button
                tabIndex={flip ? '-1' : ''}
                to='https://l.communication.quebecnumerique.com/T/WF/15110/SAbFfT/Optin/fr-CA/Form.ofsys'
                tag='href'
                inverted
                small
                animated
                // css={`
                //   pointer-events: ${flip ? 'none' : ''};
                // `}
              >
                M&apos;abonner
              </Button>
            </Center>
          </div>

          {isDesktop && !isSafari && (
            <>
              <div
                css={`
                  /* This part controls the flip */
                  backface-visibility: hidden;

                  /* Size and card position */
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;

                  display: flex;
                  justify-content: center;

                  font-size: 4em;

                  border-radius: inherit;

                  transform: rotateY(180deg);
                `}
              >
                {flip && (
                  <SnakeGame
                    fit
                    onExit={handleClick}
                    css={`
                      position: relative;
                      width: 100%;
                      height: 100%;
                      padding: 1rem;

                      display: flex;
                      justify-content: center;

                      background-color: ${`hsl(
                        ${colors.mauve80hsl.hue},
                        ${colors.mauve80hsl.saturation}%,
                        15%
                    )`};

                      border-radius: inherit;
                    `}
                  />
                )}
              </div>

              <SnakyButton
                type='button'
                onClick={handleClick}
                css={`
                  pointer-events: ${flip ? 'none' : ''};
                  visibility: ${flip ? 'hidden' : ''};

                  :focus,
                  :hover {
                    --opacity: 0;
                  }
                `}
              >
                <span css={hideVisually}>Voir la face cachée</span>
                <span>🐍</span>
              </SnakyButton>
            </>
          )}
        </Paper>
      </div>
    </Switcher>
  );
};

export default SocialNews;
