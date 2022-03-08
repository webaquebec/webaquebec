// vendors
import styled, { css } from 'styled-components';

// utils
import breakpointsRange from '../../../utils/breakpointsRange';
import { greaterThan } from '../../../utils/mediaQuery';

// styles
import colors from '../../../styles/colors';
import breakpoints from '../../../styles/breakpoints';
import { fontWeights } from '../../../styles/typography';

export const galleryStyleCard = css`
  &:hover,
  &:focus {
    transition: transform 200ms ease;

    ${greaterThan(680)} {
      transform: rotate(-3deg);
    }

    & > div {
      opacity: 1;

      &::after {
        opacity: 0;
      }

      & > img {
        filter: inherit;
      }
    }

    &::after {
      position: absolute;
      top: 0;

      display: block;
      width: 100%;
      height: 100%;

      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );

      border-radius: 12px;

      content: '';
    }
  }
`;

export const MemberCard = styled.div`
  position: relative;

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleCard}
`;

export const PictureWrapper = styled.div`
  position: relative;

  border: 4px solid ${colors.bleu80};
  border-radius: 16px;

  &::after {
    position: absolute;
    top: 0;

    display: block;
    width: 100%;
    height: 100%;

    background: rgba(0, 12, 160, 0.3);

    opacity: 1;

    transition: opacity 200ms ease;

    content: '';
  }
`;

export const MemberPicture = styled.img`
  width: 100%;

  border-radius: 12px;

  filter: grayscale(1);
`;

export const galleryStyleInfos = css`
  position: absolute;
  bottom: 0;
  z-index: 1;

  margin-top: 0;

  color: ${colors.white};

  opacity: 0;

  transition: opacity 200ms ease;

  ${breakpointsRange(
    [
      { prop: 'marginBottom', sizes: [24, 30], bases: [16, 20] },
      { prop: 'marginLeft', sizes: [16, 16], bases: [16, 20] },
      { prop: 'marginRight', sizes: [16, 16], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  img {
    filter: brightness(0) invert(1);
  }
`;

export const MemberInfos = styled.div`
  text-align: left;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 30], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleInfos}
`;

export const galleryStyleName = css`
  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const MemberName = styled.p`
  font-weight: ${fontWeights.bold};

  ${breakpointsRange(
    [
      { prop: 'fontSize', sizes: [20, 20], bases: [16, 20] },
      { prop: 'marginTop', sizes: [24, 30], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [4, 4], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleName}
`;

export const MemberJob = styled.p`
  margin: 0;

  ${breakpointsRange(
    [{ prop: 'fontSize', sizes: [12, 12], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const galleryStyleList = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [16, 16], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

export const ContactList = styled.ul`
  display: flex;

  margin: 0;
  padding: 0;

  list-style: none;

  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [24, 24], bases: [16, 20] }],
    breakpoints.spacings
  )};

  ${({ $galleryStyle }) => $galleryStyle && galleryStyleList}
`;

export const ContactItem = styled.li`
  width: 16px;
  margin-right: 10px;
`;

export const ContactIcon = styled.img`
  max-width: 100%;
`;
