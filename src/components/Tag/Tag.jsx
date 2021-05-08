import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag, TagIcon, TalkerInfo } from './Tag.styles';

// images
import IconRoom from '../../images/tags/IconRoom';
import vectorEventType from '../../images/tags/vectorEventType.svg';
import vectorTalker from '../../images/tags/vectorTalker.svg';

/**
 *
 * @module Tag
 *
 * @example
 * <Tag>Design UX</Tag>
 * <Tag eventType='talk' />
 * <Tag room='design' />
 * <Tag talker={talker} />
 */

const Tag = ({ room, talker, eventType, children }) => {
  let tagType = 'default';
  if (room) {
    tagType = 'room';
  } else if (talker) {
    tagType = 'talker';
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
      $talker={tagType === 'talker'}
      $eventType={tagType === 'eventType'}
    >
      {tagType === 'room' && (
        <>
          <span css={TagIcon}>
            <IconRoom />
          </span>
          <span>{rooms[room]}</span>
        </>
      )}
      {tagType === 'talker' && (
        <>
          <img css={TagIcon} src={vectorTalker} alt='' role='presentation' />
          <div>
            <TalkerInfo>{talker.name}</TalkerInfo>
            <TalkerInfo>{talker.job}</TalkerInfo>
            <TalkerInfo>{talker.company}</TalkerInfo>
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
   * Specifies which data to show if the tag is a talker one
   */
  talker: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
    company: PropTypes.string,
  }),
  /**
   * Specifies the type of event if the tag is a type one
   */
  eventType: PropTypes.oneOf(['talk', 'workshop']),
  children: PropTypes.node,
};

Tag.defaultProps = {
  room: undefined,
  talker: undefined,
  eventType: undefined,
  children: undefined,
};

export default Tag;
