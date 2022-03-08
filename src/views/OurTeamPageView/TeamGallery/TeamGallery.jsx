// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

// components
import Grid from '../../../components/LayoutSections/Grid';
import TeamMemberCard from '../TeamMemberCard';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// images
import vectorStar from '../../../images/stickers/vectorStickerAquaStar.svg';
import vectorDesign from '../../../images/stickers/vectorStickerDesign.svg';
import vectorMouse from '../../../images/stickers/vectorStickerMouse.svg';
import vectorBigGrid from '../../../images/team/vectorBigGrid.svg';
import vectorSmallGrid from '../../../images/team/vectorSmallGrid.svg';

// styles
import {
  TitleWrapper,
  VectorStar,
  VectorMouse,
  VectorDesign,
  GalleryWrapper,
  GalleryGrid,
  GalleryTitle,
  GalleryList,
  GalleryItem,
  galleryGrid,
} from './TeamGallery.styles';

const TeamGallery = ({ membersData }) => {
  const mobile = useMedia(lessThanCondition(680));
  let mobileFirstMembersList;
  let mobileSecondMembersList;
  if (membersData.members.length > 0) {
    if (membersData.members.length > 8) {
      mobileFirstMembersList = membersData.members.slice(
        0,
        membersData.members.length / 2
      );
      mobileSecondMembersList = membersData.members.slice(
        membersData.members.length / 2,
        membersData.members.length
      );
    } else {
      mobileFirstMembersList = membersData.members;
    }
  }
  const isFirstSection = membersData.id === 0;
  const isSecondSection = membersData.id === 1;
  const isThirdSection = membersData.id === 2;

  return (
    <>
      <TitleWrapper>
        <GalleryTitle>{membersData.name}</GalleryTitle>
        {isFirstSection && (
          <VectorStar src={vectorStar} alt='' role='presentation' />
        )}
        {isThirdSection && (
          <VectorMouse src={vectorMouse} alt='' role='presentation' />
        )}
      </TitleWrapper>
      <GalleryWrapper>
        {mobile ? (
          <>
            <GalleryList>
              {mobileFirstMembersList.map((item) => (
                <GalleryItem key={item.id}>
                  <TeamMemberCard
                    key={`mobile-gallery${membersData.id}-member${item.id}`}
                    member={item}
                    galleryStyle
                  />
                </GalleryItem>
              ))}
            </GalleryList>

            {mobileSecondMembersList && (
              <GalleryList>
                {mobileSecondMembersList.map((item) => (
                  <GalleryItem key={item.id}>
                    <TeamMemberCard
                      key={`mobile-gallery${membersData.id}-member${item.id}`}
                      member={item}
                      galleryStyle
                    />
                  </GalleryItem>
                ))}
              </GalleryList>
            )}
          </>
        ) : (
          <>
            <Grid
              css={galleryGrid}
              minWidth='250px'
              space='var(--container-gutter)'
              limit='4'
            >
              {membersData.members.map((item) => (
                <TeamMemberCard
                  key={`gallery${membersData.id}-member${item.id}`}
                  member={item}
                  galleryStyle
                />
              ))}
            </Grid>
            {isFirstSection && (
              <GalleryGrid src={vectorBigGrid} alt='' role='presentation' />
            )}
            {isThirdSection && (
              <GalleryGrid src={vectorSmallGrid} alt='' role='presentation' />
            )}
            {isSecondSection && (
              <VectorDesign src={vectorDesign} alt='' role='presentation' />
            )}
          </>
        )}
      </GalleryWrapper>
    </>
  );
};

TeamGallery.propTypes = {
  membersData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        photoUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        job: PropTypes.string,
        email: PropTypes.string,
        instagram: PropTypes.string,
        linkedin: PropTypes.string,
        twitter: PropTypes.string,
        website: PropTypes.string,
      }).isRequired
    ),
  }).isRequired,
};

export default TeamGallery;
