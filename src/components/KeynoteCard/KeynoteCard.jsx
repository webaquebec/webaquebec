import React from 'react';
import PropTypes from 'prop-types';
import {
  SpeakerPicture,
  Wrapper,
  TextWrapper,
  SpeakerName,
  Organization,
} from './KeynoteCard.styles';

const KeynoteCard = ({ speaker, big, mobileRotationAngle }) => {
  const fullName = `${speaker.firstName} ${speaker.lastName}`;

  return (
    <Wrapper
      to={speaker.detailPageUrl}
      css={`
        transform: rotate(${mobileRotationAngle}deg);
      `}
    >
      <SpeakerPicture $big={big} fluid={speaker.picture} alt={fullName} />

      <TextWrapper>
        <SpeakerName>{fullName}</SpeakerName>

        <Organization>{speaker.organization}</Organization>
      </TextWrapper>
    </Wrapper>
  );
};

KeynoteCard.propTypes = {
  /**
   * Specifies the speaker's information
   */
  speaker: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    organization: PropTypes.string.isRequired,
    detailPageUrl: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      aspectRatio: PropTypes.number,
      base64: PropTypes.string,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      srcSetWebp: PropTypes.string.isRequired,
    }),
  }).isRequired,
  /**
   * Specifies whether the card is big or regular size
   */
  big: PropTypes.bool,
  /**
   * Specifies the rotation angle of the card for mobile version
   */
  mobileRotationAngle: PropTypes.number,
};

KeynoteCard.defaultProps = {
  big: false,
  mobileRotationAngle: 0,
};

export default KeynoteCard;
