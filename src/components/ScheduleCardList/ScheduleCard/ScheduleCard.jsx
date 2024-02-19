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
  Content,
  StyledTimeStamp,
  StyledScheduleCard,
  Title,
  noTimeStyle,
} from './ScheduleCard.styles';

const categoryColors = {
  design: colors.mauve,
  developpement: colors.ciel,
  innovation: colors.turquoise,
  'communication-and-marketing': colors.jaune,
  'communication-et-marketing': colors.jaune,
  'jeux-video': colors.rose100,
  'competences-transversales': colors.rose100,
  'communication-dans-ladministration-publique': colors.rose100,
};

/**
 *
 * @module ScheduleCard
 *
 */
const ScheduleCard = ({
  title,
  titleAs,
  content,
  contentAs,
  place,
  time,
  type,
  categories,
  speakers,
  to,
  ...rest
}) => (
  <StyledScheduleCard
    to={to}
    $accentColor={categoryColors[categories[0]] || colors.gris90}
    {...rest}
  >
    <Container
      lightColor={colors.white}
      darkColor={colors.gris90}
      css={time ? undefined : noTimeStyle}
    >
      <Stack>
        {time && (
          <div>
            <StyledTimeStamp beginsAt={time.beginsAt} endsAt={time.endsAt} />
          </div>
        )}

        <Title as={titleAs}>{title}</Title>

        {content && (
          <Content
            as={contentAs}
            dangerouslySetInnerHTML={{
              __html: truncate(content, 168, true),
            }}
          />
        )}

        {speakers.map((speaker) => (
          <div key={speaker.id}>
            <Tag speaker={speaker} />
          </div>
        ))}

        {(categories.length > 0 || type || place) && (
          <Cluster>
            <div>
              {categories.map((category) => (
                <Tag key={category} category={category} />
              ))}

              {type && <Tag eventType={type} />}
            </div>
          </Cluster>
        )}
      </Stack>
    </Container>
  </StyledScheduleCard>
);

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
   * Specifies the content of the schedule card. Could be a simple string, a single or multiple HTML element(s) or custom React component(s)
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Specifies a different HTML tag applied to the content.
   * When using an HTML heading tag, choose wisely to respect the semantic of the document for accessibility reasons.
   * @see [https://www.w3.org/WAI/tutorials/page-structure/headings/](https://www.w3.org/WAI/tutorials/page-structure/headings/)
   */
  contentAs: PropTypes.string,
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
};

ScheduleCard.defaultProps = {
  titleAs: undefined,
  content: undefined,
  contentAs: undefined,
  time: undefined,
  place: null,
  type: null,
  categories: [],
  speakers: [],
};

export default ScheduleCard;
