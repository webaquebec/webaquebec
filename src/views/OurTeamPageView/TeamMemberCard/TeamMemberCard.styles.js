// vendors
import styled, { css } from 'styled-components';

// utils
import GatsbyImage from 'gatsby-image';
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';
import { breakpoint } from '../TeamGallery/TeamGallery.styles';
import { speed } from '../../../styles/animation';

export const galleryStyleCard = css`
  @media screen and (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus {
      transition: transform ${speed.fast};
    }
  }
`;

export const MemberCard = styled.div`
  position: relative;

  &::after {
    position: absolute;
    top: 0;

    display: block;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(30, 30, 80, 0.8) 100%
    );

    border-radius: 12px;

    opacity: 0;

    @media screen and (prefers-reduced-motion: no-preference) {
      transition: opacity ${speed.fast};
    }

    content: '';
  }

  ${greaterThan(breakpoint)} {
    &::after {
      opacity: 1;
    }
  }

  &:hover,
  &:focus {
    z-index: 1;

    &::after {
      opacity: 1;
    }

    & > div {
      opacity: 1;
    }
  }

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleCard}
`;

export const PictureWrapper = styled.div`
  position: relative;

  border: 4px solid ${colors.blueberry};
  border-radius: 16px;
`;

export const MemberPicture = styled(GatsbyImage)`
  width: 100%;

  border-radius: 12px;
`;

export const galleryStyleInfos = css`
  bottom: 0;
  z-index: 1;

  margin-top: 0;

  color: ${colors.white};

  opacity: 0;

  transition: opacity ${speed.fast};

  ${breakpointsRange(
    [{ prop: 'margin', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${greaterThan(breakpoint)} {
    opacity: 1;
  }
`;

export const MemberInfos = styled.div`
  position: absolute;

  text-align: left;

  text-shadow: 2px 1px ${colors.black};

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleInfos}
`;

export const galleryStyleName = css`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 14], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MemberName = styled.p`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [4, 4], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
  ${({ $galleryStyle }) => $galleryStyle && galleryStyleName}
`;

export const galleryStyleJob = css`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [12, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MemberJob = styled.p`
  margin: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [14, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
  ${({ $galleryStyle }) => $galleryStyle && galleryStyleJob}
`;

export const galleryStyleList = css`
  margin-top: 0;
`;

export const ContactList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleList}
`;

export const ContactItem = styled.li`
  width: 16px;
  margin-right: 10px;
`;

export const ContactIcon = styled.img`
  max-width: 100%;
`;
