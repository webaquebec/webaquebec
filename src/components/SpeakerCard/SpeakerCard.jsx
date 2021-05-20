// vendors
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
import iconEmail from '../../images/socialMedia/email.svg';
import iconInstagram from '../../images/socialMedia/instagram.svg';
import iconLinkedin from '../../images/socialMedia/linkedin.svg';
import iconTwitter from '../../images/socialMedia/twitter.svg';
import iconWebsite from '../../images/socialMedia/website.svg';
import groupBy from '../../utils/groupBy';

const SpeakerCard = ({ speaker }) => {
  const socialNetworksGroupByType = groupBy(speaker.socialNetworks, 'type');

  const picture = speaker.photoUrlSharp?.childImageSharp?.fixed;

  const contactLinks = [
    {
      email: { name: 'Adresse courriel', icon: iconEmail, url: speaker.email },
    },
    {
      instagram: {
        name: 'Compte Instagram',
        icon: iconInstagram,
        url: socialNetworksGroupByType.instagram?.profile,
      },
    },
    {
      linkedin: {
        name: 'Compte LinkedIn',
        icon: iconLinkedin,
        url: socialNetworksGroupByType.linkedin?.profile,
      },
    },
    {
      twitter: {
        name: 'Compte Twitter',
        icon: iconTwitter,
        url: socialNetworksGroupByType.twitter?.profile,
      },
    },
    {
      website: { name: 'Site Web', icon: iconWebsite, url: speaker.websiteUrl },
    },
  ];

  const fullName = `${speaker.firstName} ${speaker.lastName}`;

  return (
    <Sidebar css={StyledSpeakerCard} contentMin='75%' sideWidth='8ch'>
      <div>
        <CardMobileHeader>
          <SpeakerPicture fixed={picture} alt={fullName} />
          <div>
            <SpeakerInfo>
              <HeaderInfo>{fullName}</HeaderInfo>
              <HeaderInfo>{speaker.jobTitle}</HeaderInfo>
              <HeaderInfo>{speaker.organization}</HeaderInfo>
            </SpeakerInfo>

            <SpeakerLinks>
              {contactLinks.map((link) => (
                <SpeakerLinkItem key={link.type}>
                  <a href={link.url} rel='noopener noreferrer' target='_blank'>
                    <LinkIcon src={link.icon} alt={link.name} />
                  </a>
                </SpeakerLinkItem>
              ))}
            </SpeakerLinks>
          </div>
        </CardMobileHeader>
        <div>
          <SpeakerHeader>
            <HeaderInfo>{fullName}</HeaderInfo>
            {speaker.jobTitle && <HeaderInfo>{speaker.jobTitle}</HeaderInfo>}
            {speaker.organization && (
              <HeaderInfo>{speaker.organization}</HeaderInfo>
            )}
          </SpeakerHeader>
          <SpeakerDescription
            dangerouslySetInnerHTML={{ __html: speaker.biography }}
          />
        </div>
      </div>
    </Sidebar>
  );
};

SpeakerCard.propTypes = {
  /**
   * Specifies the speaker's information
   */
  speaker: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    email: PropTypes.string,
    websiteUrl: PropTypes.string,
    photoUrl: PropTypes.string,
    photoUrlSharp: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          srcSetWebp: PropTypes.string.isRequired,
        }),
      }),
    }),
    socialNetworks: PropTypes.arrayOf(
      PropTypes.shape({
        profile: PropTypes.string,
        type: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default SpeakerCard;
