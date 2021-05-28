// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';

// utils
import { greaterThan, lessThan } from '../../../utils/mediaQuery';

// styles
import { DateList, DateListItem, dateTabStyle } from './Hero.styles';
import zIndexes from '../../../styles/zIndexes';
import HeaderGradient from '../../../components/HeaderGradient';

const Wrapper = styled.div`
  position: sticky;
  top: 60px;
  z-index: ${zIndexes.sticky};

  padding: 2rem 0;

  transform: translateY(-50%);
`;

const desktopDates = css`
  ${lessThan(649)} {
    display: none;
  }
`;

const mobileDates = css`
  ${greaterThan(650)} {
    display: none;
  }
`;

const Hero = ({ location, datePaths }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px',
  });

  const current = datePaths.find((item) => item.path === location.pathname);

  return (
    <>
      <HeroGrid ref={ref} title='programmation' displayYear />

      <Wrapper>
        <HeaderGradient visible={!inView} />

        <Center maxWidth='736px' gutters='16px'>
          <DateList css={desktopDates}>
            {datePaths.map((item) => (
              <DateListItem key={`date-${item.path}`}>
                <Button
                  to={item.path}
                  activeClassName='active'
                  outlined
                  medium
                  tag='link'
                  css={dateTabStyle}
                >
                  <span>{item.date}</span>
                </Button>
              </DateListItem>
            ))}
          </DateList>
          <div css={mobileDates}>
            <Dropdown title={current.date}>
              {datePaths
                .filter((item) => item.path !== location.pathname)
                .map((item) => (
                  <Button
                    key={`dropdown-item-${item.path}`}
                    to={item.path}
                    activeClassName='active'
                    outlined
                    tag='link'
                    css={dateTabStyle}
                  >
                    <span>{item.date}</span>
                  </Button>
                ))}
            </Dropdown>
          </div>
        </Center>
      </Wrapper>
    </>
  );
};

Hero.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  datePaths: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
