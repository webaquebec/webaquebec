// vendors
import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMedia } from 'react-use';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';

// components
import Button from '../../../components/Button';
import DropDown from '../../../components/Dropdown';
import Center from '../../../components/LayoutSections/Center';
import Filters from '../Filters';

// utils
import { lessThanCondition, lessThan } from '../../../utils/mediaQuery';
import breakpointsRange from '../../../utils/breakpointsRange';

// styles
import { h1AltStyle } from '../../../styles/global';
import breakpoints from '../../../styles/breakpoints';
import colors from '../../../styles/colors';
import {
  selfBreakpoints,
  Wrapper,
  HeaderContent,
  DateList,
  DateListItem,
  dateTabStyle,
  dateTabTypoStyle,
} from './Hero.styles';

// contexts
import { useProgramFilters } from '../../../contexts/ProgramFiltersContext';
import { useModal } from '../../../contexts/ModalContext';

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

const Hero = ({ location, datePaths, onFilterChange, onFilterReset }) => {
  const { t } = useTranslation();

  const mobile = useMedia(lessThanCondition(selfBreakpoints[2]));

  const { getTotalAppliedFilters } = useProgramFilters();

  const { open: openModal } = useModal();

  const handleClick = (path) => {
    navigate(path, {
      state: {
        disableScrollUpdate: true,
        hash: '#program-section',
        offset: -186,
      },
    });
  };

  const current = datePaths.find((item) => item.path === location.pathname);

  const totalDates = datePaths.length;

  const totalAppliedFilters = getTotalAppliedFilters();

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
        maxWidth='var(--max-container-width)'
        gutters='var(--container-gutter)'
        intrinsic
      >
        <PageTitle css={h1AltStyle}>{t('program.title')}</PageTitle>
      </Center>

      <TextureWrapper>
        <GatsbyImage
          fixed={data.bubbleTexture?.childImageSharp?.fixed}
          alt=''
          role='presentation'
        />
      </TextureWrapper>

      <Wrapper>
        <HeaderContent
          maxWidth='1320px'
          gutters={
            mobile
              ? 'var(--container-gutter)'
              : 'calc(var(--container-gutter) * 2)'
          }
        >
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

              <div
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
                  medium
                  onClick={openModal}
                  css={`
                    ${dateTabStyle};
                    ${dateTabTypoStyle};

                    text-transform: initial;

                    background-color: ${colors.blueberry};
                    border-color: ${colors.blueberry};
                  `}
                >
                  <span>{t('filters.title')}</span>

                  {totalAppliedFilters > 0 && (
                    <span>&nbsp;&nbsp;{`(${totalAppliedFilters})`}</span>
                  )}
                </Button>
              </div>
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

          <div>
            <Filters onChange={onFilterChange} onReset={onFilterReset} />
          </div>
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
  onFilterChange: PropTypes.func,
  onFilterReset: PropTypes.func,
};
Hero.defaultProps = {
  onFilterChange: () => {},
  onFilterReset: () => {},
};

export default Hero;
