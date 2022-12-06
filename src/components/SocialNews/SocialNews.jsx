// vendors
import React from 'react';
// import { hideVisually } from 'polished';

// styles
import {
  ContactTitle,
  ContactText,
  MediaText,
  MediaList,
  ContentContainer,
  blockContainerStyle,
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

const SocialNews = () => {
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

  return (
    <Switcher
      threshold='768px'
      space='calc(var(--container-gutter) * 2)'
      limit={2}
    >
      <div>
        <Paper
          lightColor={colors.gris30}
          darkColor={colors.bleu80}
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
          lightColor={colors.bleu80}
          darkColor={colors.gris30}
          rounded
          elevation={elevation.large}
          css={blockContainerStyle}
        >
          <Center maxWidth='290px' intrinsic css={ContentContainer}>
            <ContactTitle>Ne manque rien</ContactTitle>

            <ContactText>
              Pour des nouveautés, des promotions, du contenu exclusif et une
              bonne dose de WAQ, abonne-toi à notre infolettre.
            </ContactText>

            <Button
              to='https://l.communication.quebecnumerique.com/T/WF/15110/SAbFfT/Optin/fr-CA/Form.ofsys'
              tag='href'
              inverted
              small
              animated
            >
              M&apos;abonner
            </Button>
          </Center>
        </Paper>
      </div>
    </Switcher>
  );
};

export default SocialNews;
