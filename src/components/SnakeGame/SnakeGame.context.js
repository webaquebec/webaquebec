// vendors
import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const SnakeGameContext = React.createContext();

export const useSnakeGame = () => useContext(SnakeGameContext);

export const SnakeGameProvider = ({ children }) => {
  const [pause, setPause] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [openKeyboardControlsMap, setOpenKeyboardControlsMap] = useState(false);

  const isActiveRef = useRef(false);
  const isPlayingRef = useRef(false);
  const pauseRef = useRef(false);

  const handleStart = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const togglePause = useCallback(() => {
    if (!isPlaying) {
      handleStart();
      return;
    }

    pauseRef.current = !pauseRef.current;
    isActiveRef.current = false;
  }, [handleStart, isPlaying]);

  const handleContinue = useCallback(() => {
    togglePause();
  }, [togglePause]);

  const handleQuit = useCallback(() => {
    togglePause();

    setIsPlaying(false);
  }, [togglePause]);

  const value = useMemo(
    () => ({
      pause,
      setPause,
      isPlaying,
      setIsPlaying,
      isActive,
      setIsActive,
      isActiveRef,
      isPlayingRef,
      pauseRef,
      handleStart,
      handleContinue,
      handleQuit,
      togglePause,
      openKeyboardControlsMap,
      setOpenKeyboardControlsMap,
    }),
    [
      handleContinue,
      handleQuit,
      handleStart,
      isActive,
      isPlaying,
      openKeyboardControlsMap,
      pause,
      togglePause,
    ]
  );

  return (
    <SnakeGameContext.Provider value={value}>
      {children}
    </SnakeGameContext.Provider>
  );
};

SnakeGameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const withSnakeGameProvider = (WrappedComponent) => (props) =>
  (
    <SnakeGameProvider>
      <WrappedComponent {...props} />
    </SnakeGameProvider>
  );
