// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

// styles
import {
  StyledSpeakerCard,
  SpeakerPicture,
  // SpeakerLinks,
  // SpeakerLinkItem,
  // LinkIcon,
  SpeakerHeader,
  HeaderInfo,
  SpeakerDescription,
} from './SpeakerCard.styles';
import { greaterThan, lessThanCondition } from '../../utils/mediaQuery';

// images
// import iconEmail from '../../images/socialMedia/email.svg';
// import iconInstagram from '../../images/socialMedia/instagram.svg';
// import iconLinkedin from '../../images/socialMedia/linkedin.svg';
// import iconTwitter from '../../images/socialMedia/twitter.svg';
// import iconWebsite from '../../images/socialMedia/website.svg';
// import groupBy from '../../utils/groupBy';

const SpeakerCard = ({ speaker }) => {
  // const socialNetworksGroupByType = groupBy(speaker.socialNetworks, 'type');
  const mobile = useMedia(lessThanCondition(768));

  const picture = speaker.photoUrlSharp?.childImageSharp?.fixed;

  // const contactLinks = [
  //   {
  //     email: { name: 'Adresse courriel', icon: iconEmail, url: speaker.email },
  //   },
  //   {
  //     instagram: {
  //       name: 'Compte Instagram',
  //       icon: iconInstagram,
  //       url: socialNetworksGroupByType.instagram?.profile,
  //     },
  //   },
  //   {
  //     linkedin: {
  //       name: 'Compte LinkedIn',
  //       icon: iconLinkedin,
  //       url: socialNetworksGroupByType.linkedin?.profile,
  //     },
  //   },
  //   {
  //     twitter: {
  //       name: 'Compte Twitter',
  //       icon: iconTwitter,
  //       url: socialNetworksGroupByType.twitter?.profile,
  //     },
  //   },
  //   {
  //     website: { name: 'Site Web', icon: iconWebsite, url: speaker.websiteUrl },
  //   },
  // ];

  const fullName = `${speaker.firstName} ${speaker.lastName}`;

  return (
    <StyledSpeakerCard>
      <div
        css={`
          display: grid;
          grid-template-columns: auto 1fr;

          grid-column-gap: ${speaker.photoUrl ? `var(--gap)` : undefined};
          grid-row-gap: var(--gap);
        `}
      >
        {speaker.photoUrl && (
          <SpeakerPicture
            fixed={picture}
            alt={fullName}
            css={`
              grid-row: 1;
              grid-column: 1;
            `}
          />
        )}

        {/* {contactLinks.length > 0 && (
          <SpeakerLinks css={`grid-row: 2; grid-column: 1;`}>
            {contactLinks.map((link) => (
              <SpeakerLinkItem key={link.type}>
                <a href={link.url} rel='noopener noreferrer' target='_blank'>
                  <LinkIcon src={link.icon} alt={link.name} />
                </a>
              </SpeakerLinkItem>
            ))}
          </SpeakerLinks>
        )} */}

        <div
          css={`
            grid-row: 1;
            grid-column: 2;
          `}
        >
          <SpeakerHeader>
            <HeaderInfo>{fullName}</HeaderInfo>
            {speaker.jobTitle && <HeaderInfo>{speaker.jobTitle}</HeaderInfo>}
            {speaker.organization && (
              <HeaderInfo>{speaker.organization}</HeaderInfo>
            )}
          </SpeakerHeader>

          {!mobile && speaker.biography && (
            <SpeakerDescription
              css={`
                margin-top: 16px;
              `}
              dangerouslySetInnerHTML={{ __html: speaker.biography }}
            />
          )}
        </div>

        {mobile && speaker.biography && (
          <div
            css={`
              grid-row: 2;
              grid-column: 1 / span 2;

              ${greaterThan(768)} {
                grid-row: 1;
                grid-column: 2;
              }
            `}
          >
            <SpeakerDescription
              dangerouslySetInnerHTML={{ __html: speaker.biography }}
            />
          </div>
        )}
      </div>
    </StyledSpeakerCard>
  );
};

SpeakerCard.propTypes = {
  /**
   * Specifies the speaker's information
   */
  speaker: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    jobTitle: PropTypes.string,
    organization: PropTypes.string,
    biography: PropTypes.string,
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
