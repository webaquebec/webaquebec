// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { css } from 'styled-components';
import { useMedia } from 'react-use';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import HeaderGradient from '../../../components/HeaderGradient/HeaderGradient';
import Button from '../../../components/Button';

// contexts
import { useModal } from '../../../contexts/ModalContext';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// images
import vectorYear2021 from '../../../images/vectorYear2021.svg';

import { lessThanCondition } from '../../../utils/mediaQuery';

// styles
import {
  selfBreakpoints,
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
  const [ref, inView, entry] = useInView();

  const isVisible = entry ? inView : true;

  const hasMounted = useHasMounted();
  // < 1060
  const tablet = useMedia(lessThanCondition(selfBreakpoints[3]));
  // < 832
  const mobile = useMedia(lessThanCondition(selfBreakpoints[2]));

  const { open: openModal } = useModal();

  return (
    <>
      <HeroGrid ref={ref} title='programmation' displayYear />

      <Wrapper>
        <HeaderGradient
          css={willChangeOpacityStyle}
          style={{ opacity: hasMounted && !isVisible ? 1 : 0 }}
        />

        {hasMounted && (
          <HeaderContent
            maxWidth={!isVisible ? '1066px' : '736px'}
            gutters={mobile ? '0' : '32px'}
          >
            {!isVisible && !tablet && (
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

              {mobile && (
                <DateListItem>
                  <Button
                    outlined
                    medium
                    onClick={openModal}
                    css={dateTabStyle}
                  >
                    <span>Filtres</span>
                  </Button>
                </DateListItem>
              )}
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
