// vendors
import React from 'react';
import PropTypes from 'prop-types';

// images
// import iconEmail from '../../../images/socialMedia/email.svg';
// import iconInstagram from '../../../images/socialMedia/instagram.svg';
// import iconLinkedin from '../../../images/socialMedia/linkedin.svg';
// import iconTwitter from '../../../images/socialMedia/twitter.svg';
// import iconWebsite from '../../../images/socialMedia/website.svg';

// styles
import {
  MemberCard,
  PictureWrapper,
  MemberPicture,
  MemberInfos,
  MemberName,
  MemberJob,
  // ContactList,
  // ContactItem,
  // ContactIcon,
} from './TeamMemberCard.styles';

const TeamMemberCard = ({ member, galleryStyle }) => (
  // const contactLinks = [
  //   {
  //     type: 'email',
  //     name: 'Adresse courriel',
  //     icon: iconEmail,
  //     url: member.email,
  //   },
  //   {
  //     type: 'instagram',
  //     name: 'Compte Instagram',
  //     icon: iconInstagram,
  //     url: member.instagram,
  //   },
  //   {
  //     type: 'linkedin',
  //     name: 'Compte LinkedIn',
  //     icon: iconLinkedin,
  //     url: member.linkedin,
  //   },
  //   {
  //     type: 'twitter',
  //     name: 'Compte Twitter',
  //     icon: iconTwitter,
  //     url: member.twitter,
  //   },
  //   {
  //     type: 'website',
  //     name: 'Site Web',
  //     icon: iconWebsite,
  //     url: member.website,
  //   },
  // ];

  <MemberCard $galleryStyle={galleryStyle}>
    <PictureWrapper>
      <MemberPicture src={member.photoUrl} alt='' />
    </PictureWrapper>
    <MemberInfos $galleryStyle={galleryStyle}>
      <MemberName $galleryStyle={galleryStyle}>{member.name}</MemberName>
      <MemberJob $galleryStyle={galleryStyle}>{member.job}</MemberJob>
      {/* <ContactList $galleryStyle={galleryStyle}>
          {contactLinks
            .filter((link) => link.url !== undefined)
            .map((link) => (
              <ContactItem key={`member-${member.id}-${link.type}`}>
                <a href={link.url} rel='noopener noreferrer' target='_blank'>
                  <ContactIcon src={link.icon} alt={link.name} />
                </a>
              </ContactItem>
            ))}
        </ContactList> */}
    </MemberInfos>
  </MemberCard>
);
TeamMemberCard.propTypes = {
  /**
   * Specifies the member data for the card
   */
  member: PropTypes.shape({
    id: PropTypes.number,
    photoUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    job: PropTypes.string,
    email: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  /**
   * Specifies whether the card has gallery styles or not
   */
  galleryStyle: PropTypes.bool,
};

TeamMemberCard.defaultProps = {
  galleryStyle: false,
};

export default TeamMemberCard;
