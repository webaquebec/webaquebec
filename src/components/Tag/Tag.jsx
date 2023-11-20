import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag, TagIcon, SpeakerInfo } from './Tag.styles';

// images
import IconRoom from '../../images/tags/IconRoom';
import vectorEventType from '../../images/tags/vectorEventType.svg';
import vectorSpeaker from '../../images/tags/vectorSpeaker.svg';
import unSlugify from '../../utils/strings/unSlugify';

// utils
import { categoriesMap, eventTypesMap } from '../../utils/dataMapping';
import colors from '../../styles/colors';

const categoryColors = {
  design: {
    color: colors.mauve80,
    bgColor: colors.mauve10,
  },
  developpement: {
    color: colors.ciel80,
    bgColor: colors.ciel10,
  },
  innovation: {
    color: colors.turquoise90,
    bgColor: colors.turquoise10,
  },
  'communication-and-marketing': {
    color: `hsl(${colors.jaune80hsl.hue} ${colors.jaune80hsl.saturation}% 24%)`,
    bgColor: colors.jaune20,
  },
  'communication-et-marketing': {
    color: `hsl(${colors.jaune80hsl.hue} ${colors.jaune80hsl.saturation}% 24%)`,
    bgColor: colors.jaune20,
  },
  'jeux-video': {
    color: colors.rose100,
    bgColor: colors.rose10,
  },
  'competences-transversales': {
    color: colors.rose100,
    bgColor: colors.rose10,
  },
  'communication-dans-ladministration-publique': {
    color: colors.rose100,
    bgColor: colors.rose10,
  },
};

/**
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

  return (
    <StyledTag
      $category={tagType === 'category' && categoryColors[category]}
      $speaker={tagType === 'speaker'}
      $eventType={tagType === 'eventType'}
      $outlined={outlined}
    >
      {tagType === 'category' && <span>{categoriesMap[category]}</span>}
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
          <span css={TagIcon}>
            <img src={vectorEventType} alt='' role='presentation' />
          </span>
          <span>{eventTypesMap[eventType]}</span>
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
    'communication-and-marketing',
    'communication-et-marketing',
    'pitch-ton-waq',
    'jeux-video',
    'competences-transversales',
    'communication-dans-ladministration-publique',
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
    'conferences',
    'activite',
    'atelier',
    'qanda',
    'contenu-sur-demande',
    'table-ronde',
    '5-a-7',
    'keynote',
    'panel',
    'rediffusion',
    'reseautage',
    'en-direct',
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
