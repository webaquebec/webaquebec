// vendors
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// contexts
import { useSnakeGame } from '../SnakeGame.context';

// images
import VectorPlay from '../../../images/VectorPlay';
import VectorPause from '../../../images/VectorPause';
import VectorKeyboard from '../../../images/VectorKeyboard';
import VectorFlip from '../../../images/VectorFlip';

// styles
import colors from '../../../styles/colors';
import {
  Button,
  ButtonWrapper,
  Container,
  Wrapper,
  toggleTipStyle,
} from './Controls.styles';
import ToggleTip from '../../ToggleTip/ToggleTip';

const Controls = ({ color, onExit, ...rest }) => {
  const {
    togglePause,
    setOpenKeyboardControlsMap,
    openKeyboardControlsMap,
    isPlaying,
    pause,
  } = useSnakeGame();

  return (
    <>
      <ToggleTip
        darkColor={color}
        css={toggleTipStyle}
        style={{
          visibility: openKeyboardControlsMap ? 'hidden' : '',
          opacity: isPlaying ? '0' : '0.8',
        }}
      >
        L&apos;anglais est utilisé à des fins ludique et de concision dans cette
        section.
      </ToggleTip>

      <Container
        style={{ visibility: openKeyboardControlsMap ? 'hidden' : '' }}
        {...rest}
      >
        <Wrapper>
          <Button
            type='button'
            title={isPlaying && !pause ? `Pause` : `Play`}
            onClick={togglePause}
          >
            <ButtonWrapper
              css={`
                width: 15px;
              `}
            >
              <span css={hideVisually}>
                {isPlaying && !pause ? `Pause` : `Play`}
              </span>

              {isPlaying && !pause ? (
                <VectorPause color={color} />
              ) : (
                <VectorPlay color={color} />
              )}
            </ButtonWrapper>
          </Button>

          <div
            css={`
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            `}
          >
            <Button
              type='button'
              title='Keyboard controls'
              onClick={() => setOpenKeyboardControlsMap(true)}
            >
              <span css={hideVisually}>Keyboard controls</span>
              <ButtonWrapper
                css={`
                  width: 20px;
                `}
              >
                <VectorKeyboard color={color} />
              </ButtonWrapper>
            </Button>
            <Button type='button' title='Exit game' onClick={onExit}>
              <span css={hideVisually}>Exit game</span>
              <ButtonWrapper
                css={`
                  line-height: 1.2;
                  width: 18px;
                `}
              >
                <VectorFlip color={color} />
              </ButtonWrapper>
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

Controls.propTypes = {
  color: PropTypes.string,
  onExit: PropTypes.func,
};
Controls.defaultProps = {
  color: `hsl(
    ${colors.mauve80hsl.hue},
    ${colors.mauve80hsl.saturation}%,
    15%
    )`,
  onExit: undefined,
};

export default Controls;
