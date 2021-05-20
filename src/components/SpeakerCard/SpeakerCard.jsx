import React from 'react';
import PropTypes from 'prop-types';

// styles
import {
  StyledSpeakerCard,
  CardMobileHeader,
  SpeakerPicture,
  SpeakerInfo,
  SpeakerLinks,
  SpeakerLinkItem,
  LinkIcon,
  SpeakerHeader,
  HeaderInfo,
  SpeakerDescription,
} from './SpeakerCard.styles';

// components
import Sidebar from '../LayoutSections/Sidebar';

// images
import email from '../../images/socialMedia/email.svg';
import instagram from '../../images/socialMedia/instagram.svg';
import linkedin from '../../images/socialMedia/linkedin.svg';
import twitter from '../../images/socialMedia/twitter.svg';
import website from '../../images/socialMedia/website.svg';

const SpeakerCard = ({ speaker }) => {
  const linkTypes = {
    email: { name: 'Adresse courriel', icon: email },
    instagram: { name: 'Compte Instagram', icon: instagram },
    linkedin: { name: 'Compte LinkedIn', icon: linkedin },
    twitter: { name: 'Compte Twitter', icon: twitter },
    website: { name: 'Site Web', icon: website },
  };

  return (
    <Sidebar css={StyledSpeakerCard} contentMin='75%' sideWidth='8ch'>
      <div>
        <CardMobileHeader>
          <SpeakerPicture src={speaker.picture} alt={speaker.name} />
          <div>
            <SpeakerInfo>
              <HeaderInfo>{speaker.name}</HeaderInfo>
              <HeaderInfo>{speaker.job}</HeaderInfo>
              <HeaderInfo>{speaker.company}</HeaderInfo>
            </SpeakerInfo>
            <SpeakerLinks>
              {speaker.links.map((link) => (
                <SpeakerLinkItem key={link.type}>
                  <a href={link.src} rel='noopener noreferrer' target='_blank'>
                    <LinkIcon
                      src={linkTypes[link.type].icon}
                      alt={linkTypes[link.type].name}
                    />
                  </a>
                </SpeakerLinkItem>
              ))}
            </SpeakerLinks>
          </div>
        </CardMobileHeader>
        <div>
          <SpeakerHeader>
            <HeaderInfo>{speaker.name}</HeaderInfo>
            <HeaderInfo>{speaker.job}</HeaderInfo>
            <HeaderInfo>{speaker.company}</HeaderInfo>
          </SpeakerHeader>
          <SpeakerDescription
            dangerouslySetInnerHTML={{ __html: speaker.description }}
          />
        </div>
      </div>
    </Sidebar>
  );
};

SpeakerCard.propTypes = {
  /**
   * Specifies the speaker's informations
   */
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        type: PropTypes.oneOf([
          'email',
          'instagram',
          'linkedin',
          'twitter',
          'website',
        ]),
      })
    ).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakerCard;
