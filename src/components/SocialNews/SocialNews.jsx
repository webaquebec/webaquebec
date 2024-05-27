// vendors
import React, { useCallback, useState } from 'react';
import { hideVisually } from 'polished';
import { isSafari, isDesktop } from 'react-device-detect';

// styles
import { useTranslation } from 'react-i18next';
import {
  stickerStyle,
  ContactTitle,
  ContactText,
  MediaText,
  MediaList,
  ContentContainer,
  blockContainerStyle,
  SnakyButton,
  GameWrapper,
  gameContainerStyle,
  SocialLink,
  SocialIcon,
} from './SocialNews.styles';
import colors from '../../styles/colors';

// components
import Switcher from '../LayoutSections/Switcher';
import Center from '../LayoutSections/Center';
import Paper from '../Paper';
import Button from '../Button';

// images
import stickerWaq from '../../images/stickers/waqAlpha.svg';
import stickerWebAQuebec from '../../images/stickers/webAQuebecAlpha.svg';
import facebook from '../../images/socialMedia/facebook.svg';
import twitter from '../../images/socialMedia/twitter.svg';
import instagram from '../../images/socialMedia/instagram.svg';
import linkedin from '../../images/socialMedia/linkedin.svg';
import tiktok from '../../images/socialMedia/tiktok.svg';
import youtube from '../../images/socialMedia/youtube.svg';
import elevation from '../../styles/elevation';
import { easing, speed } from '../../styles/animation';
import SnakeGame from '../SnakeGame';
import { useGlobalContext } from '../../contexts/GlobalContext';

const SocialNews = () => {
  const { t } = useTranslation();

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
      name: 'Youtube',
      img: youtube,
      link: 'https://www.youtube.com/@waqwebaquebec/videos',
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
    {
      name: 'Tiktok',
      img: tiktok,
      link: 'https://www.tiktok.com/@webaquebec',
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
      <div
        css={`
          position: relative;
        `}
      >
        <img css={stickerStyle} src={stickerWaq} alt='WAQ' />
        <Paper
          lightColor={colors.peach}
          darkColor={colors.blueberry}
          rounded
          elevation={elevation.none}
          outlined
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic css={ContentContainer}>
            <ContactTitle color={colors.gris90}>
              {t('footer.socials.title')}
            </ContactTitle>

            <ContactText css={MediaText}>
              {t('footer.socials.description')}
            </ContactText>

            <MediaList>
              {socialMedia.map((media) => (
                <li key={`media-item-${media.name}`}>
                  <SocialLink
                    href={media.link}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <SocialIcon src={media.img} alt={media.name} />
                  </SocialLink>
                </li>
              ))}
            </MediaList>
          </Center>
        </Paper>

        <Paper
          lightColor={colors.peach}
          darkColor={colors.blueberry}
          rounded
          elevation={elevation.none}
          outlined
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
              <ContactTitle>{t('footer.newsletter.title')}</ContactTitle>

              <ContactText>{t('footer.newsletter.description')}</ContactText>

              <Button
                tabIndex={flip ? '-1' : ''}
                to='https://l.communication.quebecnumerique.com/T/WF/15110/SAbFfT/Optin/fr-CA/Form.ofsys'
                tag='href'
              >
                {t('footer.newsletter.cta')}
              </Button>
            </Center>
          </div>

          {/* Easter Egg 🐣 */}
          {/* Available on desktop only for now. Disabled on Safari because... it's Safari 🤦‍♂️ */}
          {isDesktop && !isSafari && (
            <>
              <GameWrapper
                css={`
                  /* This part controls the flip */
                  backface-visibility: hidden;

                  transform: rotateY(180deg);
                `}
              >
                {flip && (
                  <SnakeGame
                    fit
                    onExit={handleClick}
                    css={gameContainerStyle}
                  />
                )}
              </GameWrapper>

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
        <img css={stickerStyle} src={stickerWebAQuebec} alt='Web à Québec' />
      </div>
    </Switcher>
  );
};

export default SocialNews;
