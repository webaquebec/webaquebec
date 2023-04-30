// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

// components
import Grid from '../../../components/LayoutSections/Grid';
import TeamMemberCard from '../TeamMemberCard';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// styles
import {
  TitleWrapper,
  GalleryWrapper,
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

  const handleScroll = (e) => {
    e.currentTarget.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  return (
    <>
      <TitleWrapper>
        <GalleryTitle>{membersData.name}</GalleryTitle>
      </TitleWrapper>
      <GalleryWrapper>
        {mobile ? (
          <>
            <GalleryList>
              {mobileFirstMembersList.map((item) => (
                <GalleryItem key={item.id}>
                  <div onClick={handleScroll} aria-hidden='true'>
                    <TeamMemberCard
                      key={`mobile-gallery${membersData.id}-member${item.id}`}
                      member={item}
                      galleryStyle
                    />
                  </div>
                </GalleryItem>
              ))}
            </GalleryList>

            {mobileSecondMembersList && (
              <GalleryList>
                {mobileSecondMembersList.map((item) => (
                  <GalleryItem key={item.id}>
                    <div onClick={handleScroll} aria-hidden='true'>
                      <TeamMemberCard
                        key={`mobile-gallery${membersData.id}-member${item.id}`}
                        member={item}
                        galleryStyle
                      />
                    </div>
                  </GalleryItem>
                ))}
              </GalleryList>
            )}
          </>
        ) : (
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
