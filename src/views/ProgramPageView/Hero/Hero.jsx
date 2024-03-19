// vendors
// import { useInView } from 'react-intersection-observer';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMedia } from 'react-use';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';

// components
// import { hideVisually } from 'polished';
import Button from '../../../components/Button';
import DropDown from '../../../components/Dropdown';
import Center from '../../../components/LayoutSections/Center';

// utils
import { lessThanCondition, lessThan } from '../../../utils/mediaQuery';
import breakpointsRange from '../../../utils/breakpointsRange';

// contexts
// import { useModal } from '../../../contexts/ModalContext';
// import { useProgramFilters } from '../../../contexts/ProgramFiltersContext';

// hooks
// import useHasMounted from '../../../hooks/useHasMounted';

// styles
import { h1AltStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';
import {
  selfBreakpoints,
  Wrapper,
  HeaderContent,
  DateList,
  DateListItem,
  dateTabStyle,
  // dateTabTypoStyle,
} from './Hero.styles';

const PageTitle = styled.h1`
  ${breakpointsRange(
    [
      { prop: 'marginTop', sizes: [48, 110], bases: [16, 20] },
      { prop: 'marginBottom', sizes: [24, 175], bases: [16, 20] },
    ],
    breakpoints.spacings
  )};
`;

const TextureWrapper = styled.div`
  position: absolute;
  z-index: -1;

  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  ${breakpointsRange(
    [{ prop: 'top', sizes: [-500, -200], bases: [16, 20] }],
    breakpoints.spacings
  )};
  ${lessThan(1024)} {
    display: none;
  }
`;

const Hero = ({ location, datePaths }) => {
  // const [ref, inView] = useInView();

  // const { getTotalAppliedFilters } = useProgramFilters();

  // const isVisible = inView;

  // < 1060
  // const tablet = useMedia(lessThanCondition(selfBreakpoints[3]));
  // < 832
  const mobile = useMedia(lessThanCondition(selfBreakpoints[2]));

  // const { open: openModal } = useModal();

  const handleClick = (path) => {
    navigate(path, {
      state: {
        disableScrollUpdate: true,
        hash: '#program-section',
        offset: -86,
      },
    });
  };

  const current = datePaths.find((item) => item.path === location.pathname);

  // const totalAppliedFilters = getTotalAppliedFilters();

  const totalDates = datePaths.length;

  // const minWidth = totalDates > 3 ? '736px' : '632px';

  const data = useStaticQuery(
    graphql`
      query {
        bubbleTexture: file(relativePath: { eq: "textures/bubbleWrap.png" }) {
          childImageSharp {
            fixed(width: 800) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <>
      <Center
        // ref={ref}
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
        intrinsic
      >
        <PageTitle css={h1AltStyle}>programmation</PageTitle>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={data.bubbleTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Wrapper>
        <HeaderContent maxWidth='1320px' gutters={mobile ? '16px' : '32px'}>
          {mobile ? (
            <div
              css={`
                display: inline-flex;
                width: 100%;

                gap: 12px;
              `}
            >
              <DropDown
                title={current.date}
                css={`
                  flex-basis: 0;
                  flex-grow: 999;
                `}
              >
                {datePaths
                  .filter((item) => item.path !== location.pathname)
                  .map((item) => (
                    <Button
                      key={`dropdown-item-${item.path}`}
                      className={
                        item.path === location.pathname ? 'active' : undefined
                      }
                      outlined
                      medium
                      onClick={() => handleClick(item.path)}
                      css={dateTabStyle}
                    >
                      <span>{item.date}</span>
                    </Button>
                  ))}
              </DropDown>

              {/* <div
                css={`
                  flex-grow: 1;
                  flex-basis: 25%;

                  z-index: 1;

                  > * {
                    width: 100%;
                  }
                `}
              >
                <Button
                  outlined
                  medium
                  onClick={openModal}
                  css={`
                    ${dateTabStyle}
                    ${dateTabTypoStyle}
                  `}
                >
                  <span>Filtres</span>

                  {totalAppliedFilters > 0 && (
                    <span>{`(${totalAppliedFilters})`}</span>
                  )}
                </Button>
              </div> */}
            </div>
          ) : (
            <DateList $shrunk={totalDates <= 3}>
              {datePaths.map((item) => (
                <DateListItem key={item.date}>
                  <Button
                    className={
                      item.path === location.pathname ? 'active' : undefined
                    }
                    outlined
                    medium
                    onClick={() => handleClick(item.path)}
                    css={dateTabStyle}
                  >
                    <span>{item.date}</span>
                  </Button>
                </DateListItem>
              ))}
            </DateList>
          )}
        </HeaderContent>
      </Wrapper>
    </>
  );
};

Hero.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    state: PropTypes.shape({}),
  }).isRequired,
  datePaths: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
