// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// contexts
import { useSnakeGame } from '../SnakeGame.context';

// components
import Center from '../../LayoutSections/Center/Center';

// styles
import { MenuList, MenuButton, MenuItem } from '../SnakeGame.styles';
import {
  Copyright,
  GameTitle,
  Snaky,
  StartInstructions,
} from './SplashScreen.styles';

const SplashScreen = ({ onExit, ...rest }) => {
  const [start, setStart] = useState(false);
  const firstItemRef = React.useRef(null);

  const { handleStart, openShortcuts } = useSnakeGame();

  const handleKeyPress = React.useCallback(
    (event) => {
      if (start || openShortcuts) return;

      const key = event.code;

      if (key === 'Enter') {
        event.preventDefault();

        setStart(true);
      }
    },
    [openShortcuts, start]
  );

  React.useEffect(() => {
    if (!start) return;
    firstItemRef.current.focus();
  }, [start]);

  React.useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Center
      maxWidth='320px'
      intrinsic
      style={{ pointerEvents: openShortcuts ? 'none' : '' }}
      {...rest}
    >
      <Snaky style={{ opacity: start ? '0.7' : '1' }} />

      <GameTitle>Snake</GameTitle>

      {!start ? (
        <StartInstructions>Press enter</StartInstructions>
      ) : (
        <MenuList>
          <MenuItem>
            <MenuButton type='button' ref={firstItemRef} onClick={handleStart}>
              New game
            </MenuButton>
          </MenuItem>
          <MenuItem>
            <MenuButton type='button' onClick={onExit}>
              Exit game
            </MenuButton>
          </MenuItem>
        </MenuList>
      )}

      <Copyright>&copy; 2024 WAQ</Copyright>
    </Center>
  );
};

SplashScreen.propTypes = {
  onExit: PropTypes.func,
};
SplashScreen.defaultProps = {
  onExit: undefined,
};

export default SplashScreen;
