// vendors
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// contexts
import { useSnakeGame, withSnakeGameProvider } from './SnakeGame.context';

// components
import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import GameControls from './Controls';
import KeyboardControlsMap from './KeyboardControlsMap';

// styles
import { CRTScreenEffect, Container } from './SnakeGame.styles';
import colors from '../../styles/colors';

const SnakeGame = ({ fit, fillColor, strokeColor, onExit, ...rest }) => {
  const { isActiveRef, isPlaying, openKeyboardControlsMap } = useSnakeGame();

  const [forceUpdateKey, setForceUpdateKey] = React.useState(null);

  const emitExit = useCallback(() => {
    if (typeof onExit === 'function') onExit();
  }, [onExit]);

  const handleReset = useCallback(() => {
    setForceUpdateKey(Date.now());
  }, []);

  const handleScroll = useCallback(() => {
    if (!isActiveRef.current) return;

    isActiveRef.current = false;
  }, [isActiveRef]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container $bgColor={fillColor} {...rest}>
      <CRTScreenEffect />

      {isPlaying ? (
        <GameScreen
          key={forceUpdateKey}
          fit={fit}
          strokeColor={strokeColor}
          onReset={handleReset}
        />
      ) : (
        <SplashScreen onExit={emitExit} />
      )}

      {openKeyboardControlsMap && <KeyboardControlsMap />}

      <GameControls onExit={emitExit} />
    </Container>
  );
};

export default withSnakeGameProvider(SnakeGame);

SnakeGame.propTypes = {
  fit: PropTypes.bool,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  onExit: PropTypes.func.isRequired,
};
SnakeGame.defaultProps = {
  fit: false,
  fillColor: `hsl(
    ${colors.mauve80hsl.hue},
    ${colors.mauve80hsl.saturation}%,
    15%
    )`,
  strokeColor: 'rgba(211, 211, 211, 0.59)',
};
