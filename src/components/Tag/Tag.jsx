import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag, TagIcon, SpeakerInfo } from './Tag.styles';

// images
import IconRoom from '../../images/tags/IconRoom';
import vectorEventType from '../../images/tags/vectorEventType.svg';
import vectorSpeaker from '../../images/tags/vectorSpeaker.svg';
import unSlugify from '../../utils/strings/unSlugify';

/**
 *
 * @module Tag
 *
 * @example
 * <Tag>Design UX</Tag>
 * <Tag outlined>Design UX</Tag>
 * <Tag eventType='talk' />
 * <Tag category='design' />
 * <Tag speaker={speaker} />
 * <Tag place={place} />
 */

const Tag = ({ category, speaker, eventType, place, outlined, children }) => {
  let tagType = 'default';
  if (category) {
    tagType = 'category';
  } else if (speaker) {
    tagType = 'speaker';
  } else if (eventType) {
    tagType = 'eventType';
  } else if (place) {
    tagType = 'place';
  }

  // Room tag
  const categories = {
    design: 'Design',
    developpement: 'Développement',
    innovation: 'Innovation',
    'communication-et-marketing': 'Communication & marketing',
  };

  // Event type tag
  const eventTypes = {
    conference: 'Conférence',
    atelier: 'Atelier',
    reseautage: 'Réseautage',
    qanda: 'Q&A',
    keynote: 'Keynote',
    'contenu-sur-demande': 'Contenu sur demande',
    'pitch-ton-waq': 'Pitch ton WAQ',
  };

  return (
    <StyledTag
      $designRoom={tagType === 'category' && category === 'design'}
      $commRoom={
        tagType === 'category' && category === 'communication-et-marketing'
      }
      $devRoom={tagType === 'category' && category === 'developpement'}
      $innovationRoom={tagType === 'category' && category === 'innovation'}
      $speaker={tagType === 'speaker'}
      $eventType={tagType === 'eventType'}
      $outlined={outlined}
    >
      {tagType === 'category' && <span>{categories[category]}</span>}
      {tagType === 'speaker' && (
        <>
          <img css={TagIcon} src={vectorSpeaker} alt='' role='presentation' />
          <div>
            <SpeakerInfo>
              {`${speaker.firstName} ${speaker.lastName}`}
            </SpeakerInfo>

            {speaker.jobTitle && <SpeakerInfo>{speaker.jobTitle}</SpeakerInfo>}

            {speaker.organization && (
              <SpeakerInfo> {speaker.organization}</SpeakerInfo>
            )}
          </div>
        </>
      )}
      {tagType === 'eventType' && (
        <>
          <span>
            <img
              css={TagIcon}
              src={vectorEventType}
              alt=''
              role='presentation'
            />
          </span>
          <span>{eventTypes[eventType]}</span>
        </>
      )}
      {tagType === 'place' && (
        <>
          <span css={TagIcon}>
            <IconRoom />
          </span>
          <span>{unSlugify(place)}</span>
        </>
      )}
      {tagType === 'default' && children}
    </StyledTag>
  );
};

Tag.propTypes = {
  /**
   * Specifies which category to display if the tag is a category one
   */
  category: PropTypes.oneOf([
    'design',
    'developpement',
    'innovation',
    'communication-et-marketing',
  ]),
  /**
   * Specifies which data to show if the tag is a speaker one
   */
  speaker: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    jobTitle: PropTypes.string,
    organization: PropTypes.string,
  }),
  /**
   * Specifies the type of event if the tag is a type one
   */
  eventType: PropTypes.oneOf([
    'conference',
    'atelier',
    'reseautage',
    'qanda',
    'keynote',
    'contenu-sur-demande',
    'pitch-ton-waq',
  ]),
  /**
   * Specifies where the event takes place
   */
  place: PropTypes.string,
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
  category: undefined,
  speaker: undefined,
  eventType: undefined,
  place: undefined,
  outlined: false,
  children: undefined,
};

export default Tag;
