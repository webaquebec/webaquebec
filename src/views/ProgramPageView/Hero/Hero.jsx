// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { css } from 'styled-components';
import { useMedia } from 'react-use';
import { navigate } from 'gatsby';

// components
import HeroGrid from '../../../components/HeroGrid/HeroGrid';
import HeaderGradient from '../../../components/HeaderGradient/HeaderGradient';
import Button from '../../../components/Button';
import DropDown from '../../../components/Dropdown';

// utils
import { lessThanCondition } from '../../../utils/mediaQuery';

// contexts
import { useModal } from '../../../contexts/ModalContext';

// hooks
import useHasMounted from '../../../hooks/useHasMounted';

// images
import vectorYear2021 from '../../../images/vectorYear2021.svg';

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
  dateTabTypoStyle,
} from './Hero.styles';

const willChangeOpacityStyle = css`
  will-change: opacity;
`;

const Hero = ({ location, datePaths }) => {
  const [ref, inView, entry] = useInView();

  const isVisible = entry ? inView : true;

  const hasMounted = useHasMounted();
  // < 1060
  const tablet = useMedia(lessThanCondition(selfBreakpoints[3]));
  // < 832
  const mobile = useMedia(lessThanCondition(selfBreakpoints[2]));

  const { open: openModal } = useModal();

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
            gutters={mobile ? '16px' : '32px'}
          >
            {!isVisible && !tablet && (
              <StickyTitle>
                programmation
                <YearSticker src={vectorYear2021} alt='2021' />
              </StickyTitle>
            )}

            {mobile ? (
              <div
                css={`
                  display: inline-flex;
                  width: 100%;
                `}
              >
                <DropDown
                  title={current.date}
                  css={`
                    flex-basis: 0;
                    flex-grow: 999;

                    margin-right: 12px;
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
                    outlined
                    medium
                    onClick={openModal}
                    css={`
                      ${dateTabStyle}
                      ${dateTabTypoStyle}
                    `}
                  >
                    <span>Filtres</span>
                  </Button>
                </div>
              </div>
            ) : (
              <DateList>
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
        )}
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
