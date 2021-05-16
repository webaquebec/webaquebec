import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag, TagIcon, SpeakerInfo } from './Tag.styles';

// images
import IconRoom from '../../images/tags/IconRoom';
import vectorEventType from '../../images/tags/vectorEventType.svg';
import vectorSpeaker from '../../images/tags/vectorSpeaker.svg';

/**
 *
 * @module Tag
 *
 * @example
 * <Tag>Design UX</Tag>
 * <Tag outlined>Design UX</Tag>
 * <Tag eventType='talk' />
 * <Tag room='design' />
 * <Tag speaker={speaker} />
 */

const Tag = ({ room, speaker, eventType, outlined, children }) => {
  let tagType = 'default';
  if (room) {
    tagType = 'room';
  } else if (speaker) {
    tagType = 'speaker';
  } else if (eventType) {
    tagType = 'eventType';
  }

  // Room tag
  const rooms = {
    design: 'Design',
    communication: 'Communication & marketing',
    development: 'Développement',
    innovation: 'Innovation',
  };

  // Event type tag
  const eventTypes = {
    talk: 'Conférence',
    workshop: 'Atelier',
  };

  return (
    <StyledTag
      $designRoom={tagType === 'room' && room === 'design'}
      $commRoom={tagType === 'room' && room === 'communication'}
      $devRoom={tagType === 'room' && room === 'development'}
      $innovationRoom={tagType === 'room' && room === 'innovation'}
      $speaker={tagType === 'speaker'}
      $eventType={tagType === 'eventType'}
      $outlined={outlined}
    >
      {tagType === 'room' && (
        <>
          <span css={TagIcon}>
            <IconRoom />
          </span>
          <span>{rooms[room]}</span>
        </>
      )}
      {tagType === 'speaker' && (
        <>
          <img css={TagIcon} src={vectorSpeaker} alt='' role='presentation' />
          <div>
            <SpeakerInfo>{speaker.name}</SpeakerInfo>
            <SpeakerInfo>{speaker.job}</SpeakerInfo>
            <SpeakerInfo>{speaker.company}</SpeakerInfo>
          </div>
        </>
      )}
      {tagType === 'eventType' && (
        <>
          <img css={TagIcon} src={vectorEventType} alt='' role='presentation' />
          <span>{eventTypes[eventType]}</span>
        </>
      )}
      {tagType === 'default' && children}
    </StyledTag>
  );
};

Tag.propTypes = {
  /**
   * Specifies which room to display if the tag is a room one
   */
  room: PropTypes.oneOf([
    'design',
    'communication',
    'development',
    'innovation',
  ]),
  /**
   * Specifies which data to show if the tag is a speaker one
   */
  speaker: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
    company: PropTypes.string,
  }),
  /**
   * Specifies the type of event if the tag is a type one
   */
  eventType: PropTypes.oneOf(['talk', 'workshop']),
  /**
   * Specifies whether the tag is outlined or not
   */
  outlined: PropTypes.bool,
  /**
   * Child node elements within the tag content
   */
  children: PropTypes.node,
};

Tag.defaultProps = {
  room: undefined,
  speaker: undefined,
  eventType: undefined,
  outlined: false,
  children: undefined,
};

export default Tag;
