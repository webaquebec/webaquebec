// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { css } from 'styled-components';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import HeaderGradient from '../../../components/HeaderGradient/HeaderGradient';
import Button from '../../../components/Button';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// images
import vectorYear2021 from '../../../images/vectorYear2021.svg';

// styles
import {
  Wrapper,
  HeaderContent,
  StickyTitle,
  YearSticker,
  DateList,
  DateListItem,
  dateTabStyle,
} from './Hero.styles';

const willChangeOpacityStyle = css`
  will-change: opacity;
`;

const Hero = ({ datePaths }) => {
  const [ref, inView] = useInView();

  const hasMounted = useHasMounted();

  return (
    <>
      <HeroGrid ref={ref} title='programmation' displayYear />

      <Wrapper>
        <HeaderGradient
          css={willChangeOpacityStyle}
          style={{ opacity: hasMounted && !inView ? 1 : 0 }}
        />

        {hasMounted && (
          <HeaderContent maxWidth={!inView ? '1066px' : '736px'}>
            {!inView && (
              <StickyTitle>
                programmation
                <YearSticker src={vectorYear2021} alt='2021' />
              </StickyTitle>
            )}
            <DateList>
              {datePaths.map((item) => (
                <DateListItem key={item.date}>
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
          </HeaderContent>
        )}
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
