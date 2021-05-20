// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import Center from '../../../components/LayoutSections/Center';
import Button from '../../../components/Button';

// styles
import { DateList, DateListItem, dateTabStyle } from './Hero.styles';
import zIndexes from '../../../styles/zIndexes';
import HeaderGradient from '../../../components/HeaderGradient/HeaderGradient';

const Wrapper = styled.div`
  position: sticky;
  top: 60px;
  z-index: ${zIndexes.sticky};

  /* margin-top: 60px; */

  padding: 2rem 0;

  transform: translateY(-50%);
`;

const Hero = ({ datePaths }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px',
  });

  return (
    <>
      <HeroGrid ref={ref} title='programmation' displayYear />

      <Wrapper>
        {!inView && <HeaderGradient />}

        <Center maxWidth='736px'>
          <DateList>
            {datePaths.map((item) => (
              <DateListItem key={item.dateNumber}>
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
        </Center>
      </Wrapper>
    </>
  );
};

Hero.propTypes = {
  datePaths: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hero;
