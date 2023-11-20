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
  GameWrapper,
  gameContainerStyle,
} from './SocialNews.styles';
import colors from '../../styles/colors';
import elevation from '../../styles/elevation';
import { easing, speed } from '../../styles/animation';

// components
import Switcher from '../LayoutSections/Switcher';
import Center from '../LayoutSections/Center';
import Paper from '../Paper';
import Modal from '../Modal';
import Button from '../Button';
import SnakeGame from '../SnakeGame';

// images
import facebook from '../../images/socialMedia/facebook.svg';
import twitter from '../../images/socialMedia/twitter.svg';
import instagram from '../../images/socialMedia/instagram.svg';
import linkedin from '../../images/socialMedia/linkedin.svg';

// context
import { useGlobalContext } from '../../contexts/GlobalContext';

// utils
import randomString from '../../utils/math/randomString';
import NewsletterModal from '../NewsletterCard/NewsletterModal/NewsletterModal';

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

const customId = randomString();

const SocialNews = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [flip, setFlip] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const { setPauseAnimation } = useGlobalContext();

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
    <>
      <Switcher
        threshold='768px'
        space='calc(var(--container-gutter) * 2)'
        limit={2}
      >
        <div>
          <Paper
            lightColor={colors.earlyDawn}
            darkColor={colors.bleu100}
            elevation={elevation.large}
            css={blockContainerStyle}
            rounded
            overlaid
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
                  Pour des nouveautés, des promotions, du contenu exclusif et
                  une bonne dose de WAQ, abonne-toi à notre infolettre.
                </ContactText>

                <Button onClick={openModal} inverted small animated>
                  M&apos;abonner
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
        </div>
      </Switcher>

      {modalVisible && (
        <Modal
          aria-labelledby={customId}
          isOpen={modalVisible}
          onClose={closeModal}
          closeTimeoutMS={200}
          noBorder
          noTransition
        >
          <NewsletterModal />
        </Modal>
      )}
    </>
  );
};

export default SocialNews;
