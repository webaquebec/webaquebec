// vendors
import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../styles/colors';
import Stack from '../../LayoutSections/Stack/Stack';

// components
import Cluster from '../../LayoutSections/Cluster/Cluster';
import Tag from '../../Tag';

// utils
import truncate from '../../../utils/strings/truncate';

// styles
import {
  Container,
  StyledScheduleCard,
  Title,
  noTimeStyle,
  groupedUpContainer,
  groupedDownContainer,
  placeStyle,
} from './ScheduleCard.styles';

/**
 *
 * @module ScheduleCard
 *
 */
const ScheduleCard = ({
  title,
  titleAs,
  place,
  time,
  type,
  categories,
  speakers,
  to,
  groupedUp,
  groupedDown,
  ...rest
}) => {
  const categoryColors = {
    design: colors.plum,
    developpement: colors.kiwi,
    innovation: colors.pineapple,
    'communication-and-marketing': colors.watermelon,
    'communication-et-marketing': colors.watermelon,
  };

  return (
    <StyledScheduleCard
      to={to}
      $accentColor={categoryColors[categories[0]] || colors.gris90}
      {...rest}
    >
      <Container
        lightColor={colors.white}
        darkColor={colors.gris90}
        css={{
          ...time ? undefined : noTimeStyle,
          ...groupedUp ? groupedUpContainer : undefined,
          ...groupedDown ? groupedDownContainer : undefined,
        }}
      >
        <Stack space="16px">
          {(place && !groupedUp) && (
            <div>
              <div css={placeStyle}>{place}</div>
              <hr css={{ margin: "16px -16px 0 -16px" }} />
            </div>
          )}

          <Title as={titleAs}>{title}</Title>

          {speakers.map((speaker) => (
            <div key={speaker.id}>
              <Tag speaker={speaker} />
            </div>
          ))}

          {(categories.length > 0) && (
            <Cluster>
              <div>
                {categories.map((category) => (
                  <Tag key={category} category={category} />
                ))}
              </div>
            </Cluster>
          )}
        </Stack>
      </Container>
    </StyledScheduleCard>
  );
};

ScheduleCard.propTypes = {
  /**
   * Specifies the reference to a local page (i.e. /about) used with Gatsby Link tag
   */
  to: PropTypes.string.isRequired,
  /**
   * Specifies the title of the schedule card.
   */
  title: PropTypes.string.isRequired,
  /**
   * Specifies a different HTML tag applied to the title.
   * When using an HTML heading tag, choose wisely to respect the semantic of the document for accessibility reasons.
   * @see [https://www.w3.org/WAI/tutorials/page-structure/headings/](https://www.w3.org/WAI/tutorials/page-structure/headings/)
   */
  titleAs: PropTypes.string,
  /**
   * Specifies where a session takes place
   */
  place: PropTypes.string,
  /**
   * Specifies the beginning and end of time of a session
   */
  time: PropTypes.shape({
    beginsAt: PropTypes.string,
    endsAt: PropTypes.string,
  }),
  /**
   * Specifies the type of session
   */
  type: PropTypes.string,
  /**
   * Specifies which categories a session is attached to
   */
  categories: PropTypes.arrayOf(
    PropTypes.oneOf([
      'design',
      'developpement',
      'innovation',
      'communication-and-marketing',
      'communication-et-marketing',
      'pitch-ton-waq',
      'jeux-video',
      'competences-transversales',
      'communication-dans-ladministration-publique',
    ])
  ),
  /**
   * Specifies speakers identity information
   */
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      jobTitle: PropTypes.string,
      organization: PropTypes.string,
    })
  ),
  /**
   * Specifies if the card should merge with the one above
   */
  groupedUp: PropTypes.boolean,
  groupedDown: PropTypes.boolean,
};

ScheduleCard.defaultProps = {
  titleAs: undefined,
  time: undefined,
  place: null,
  type: null,
  categories: [],
  speakers: [],
};

export default ScheduleCard;
