/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-param-reassign */
// vendors
import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

// contexts
import { useSnakeGame } from '../SnakeGame.context';

// components
import Stack from '../../LayoutSections/Stack';
import Center from '../../LayoutSections/Center';
import colors from '../../../styles/colors';
import Tail from '../Tail';

// styles
import {
  Canvas,
  GameOver,
  Menu,
  MenuButton,
  MenuInstructionsContainer,
  MenuItem,
  PlayInstructions,
  Score,
  ScoreTitle,
  ScoreValue,
  ScoringContainer,
} from '../SnakeGame.styles';

const GameScreen = ({ fit, strokeColor, onReset }) => {
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [showGameOver, setShowGameOver] = useState(false);

  const {
    isActiveRef,
    pauseRef,
    isActive,
    isPlaying,
    pause,
    openShortcuts,
    setPause,
    setIsActive,
    handleQuit: onQuit,
    handleContinue,
    togglePause,
  } = useSnakeGame();

  const fps = 9.5;
  const defaultSize = 680;

  const canvasRef = useRef(null);
  const menuBtnRef = useRef(null);
  const gameOverRef = useRef(false);
  const tailLengthRef = useRef(4);
  const scoreRef = useRef(0);
  const recordRef = useRef(0);
  const snakeParts = useRef([]);
  const grid = useRef({
    padding: 4,
    width: 0,
    height: 0,
    cellCount: 32,
    cellSize: 0,
    show: false,
  });

  const emitReset = useCallback(() => {
    if (typeof onReset === 'function') onReset();
  }, [onReset]);

  // this will generate random color for snake's head
  const randomColor = (colorArr) => {
    const color = colorArr[Math.floor(Math.random() * 2)];
    return color;
  };

  const head = useRef({
    x: 2,
    y: 1,
    color: randomColor([colors.rose, colors.turquoise]),
    vX: 0,
    vY: 0,
    draw: (ctx, cellSize, padding) => {
      ctx.fillStyle = head.current.color;
      ctx.shadowColor = head.current.color;
      ctx.shadowBlur = 2.5;
      ctx.fillRect(
        head.current.x * cellSize + padding,
        head.current.y * cellSize + padding,
        cellSize,
        cellSize
      );
    },
  });

  const food = useRef({
    x: 5,
    y: 5,
    color: `hsl(${colors.cherryHsl.hue}, ${colors.cherryHsl.hue}%, 60%)`,
    draw: (ctx, cellSize, padding) => {
      ctx.fillStyle = food.current.color;
      ctx.shadowColor = food.current.color;
      ctx.shadowBlur = 5;
      ctx.fillRect(
        food.current.x * cellSize + padding,
        food.current.y * cellSize + padding,
        cellSize,
        cellSize
      );
    },
  });

  const initCanvas = useCallback(
    (canvas) => {
      const canvasSize = fit ? '100%' : defaultSize;
      canvas.style.width = canvasSize;
      canvas.style.height = canvasSize;
      canvas.width = canvas.offsetHeight;
      canvas.height = canvas.offsetHeight;
      canvas.removeAttribute('style');
    },
    [fit]
  );

  const initGrid = useCallback(
    (canvas) => {
      const width = canvas.width - 2 * grid.current.padding;
      const height = canvas.height - 2 * grid.current.padding;
      const cellSize = width / grid.current.cellCount;

      grid.current.width = width;
      grid.current.height = height;
      grid.current.cellSize = cellSize;
    },
    [grid]
  );

  const updateSnakePosition = useCallback(() => {
    head.current.x += head.current.vX;
    head.current.y += head.current.vY;
  }, [head]);

  const foodCollision = useCallback(() => {
    let collision = false;

    snakeParts.current.forEach((part) => {
      if (part.x === food.current.x && part.y === food.current.y) {
        collision = true;
      }
    });

    if (!collision) return;

    food.current.x = Math.floor(Math.random() * grid.current.cellCount);
    food.current.y = Math.floor(Math.random() * grid.current.cellCount);

    // console.log(food.current.x, food.current.y);

    tailLengthRef.current += 1;
    scoreRef.current += 1;
  }, [food, snakeParts]);

  const isGameOver = useCallback(() => {
    let gameOver = false;

    snakeParts.current.forEach((part) => {
      if (part.x === head.current.x && part.y === head.current.y) {
        gameOver = true;
      }
    });

    if (
      head.current.x < 0 ||
      head.current.y < 0 ||
      head.current.x > grid.current.cellCount - 1 ||
      head.current.y > grid.current.cellCount - 1
    ) {
      gameOver = true;
    }

    return gameOver;
  }, [snakeParts]);

  const drawCanvas = useCallback(
    (ctx, canvas) => {
      // ctx.fillStyle = fillColor;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = strokeColor;
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    },
    [strokeColor]
  );

  const drawGrid = useCallback(
    (ctx) => {
      ctx.beginPath();

      const { width, height, cellSize, padding } = grid.current;

      for (let i = 0; i <= width; i += cellSize) {
        ctx.moveTo(i + padding, padding);
        ctx.lineTo(i + padding, height + padding);
      }

      for (let i = 0; i <= height; i += cellSize) {
        ctx.moveTo(padding, i + padding);
        ctx.lineTo(width + padding, i + padding);
      }
      ctx.closePath();
      ctx.strokeStyle = strokeColor;
      ctx.stroke();
    },
    [grid, strokeColor]
  );

  const drawSnake = useCallback(
    (ctx) => {
      // loop through our snakeParts array
      snakeParts.current.forEach((part) => {
        part.draw(ctx, grid.current.cellSize, grid.current.padding);
      });

      snakeParts.current.push(
        new Tail(head.current.x, head.current.y, colors.mauve)
      );

      if (snakeParts.current.length > tailLengthRef.current) {
        // remove furthest item from snake part if we have more than our tail size
        snakeParts.current.shift();
      }
      head.current.color = randomColor([colors.rose, colors.turquoise]);
      head.current.draw(ctx, grid.current.cellSize, grid.current.padding);
    },
    [head, snakeParts]
  );

  const draw = useCallback(
    (ctx, canvas) => {
      drawCanvas(ctx, canvas);

      if (grid.current.show) drawGrid(ctx);

      // drawGrid(ctx);

      drawSnake(ctx);
      food.current.draw(ctx, grid.current.cellSize, grid.current.padding);

      if (isActiveRef.current) {
        updateSnakePosition();

        if (isGameOver()) {
          gameOverRef.current = true;
          // isActiveRef.current = false;
          return false;
        }
      }

      foodCollision();

      return true;
    },
    [
      drawCanvas,
      drawGrid,
      drawSnake,
      isActiveRef,
      foodCollision,
      updateSnakePosition,
      isGameOver,
    ]
  );

  const handleRetry = useCallback(() => {
    gameOverRef.current = false;
    pauseRef.current = false;
    isActiveRef.current = false;

    emitReset();
  }, [emitReset, isActiveRef, pauseRef]);

  const handleQuit = useCallback(() => {
    onQuit();

    pauseRef.current = false;
    gameOverRef.current = false;
  }, [onQuit, pauseRef]);

  const handleKeyDown = useCallback(
    (event) => {
      const key = event.code;

      if (!isPlaying || pauseRef.current || openShortcuts) return;

      if (key === 'Space') {
        event.preventDefault();

        togglePause();
      }

      if (key === 'KeyD' || key === 'ArrowRight') {
        event.preventDefault();

        if (head.current.vX === -1) return;
        head.current.vX = 1;
        head.current.vY = 0;
        isActiveRef.current = true;

        return;
      }
      if (key === 'KeyA' || key === 'ArrowLeft') {
        event.preventDefault();

        if (head.current.vX === 1) return;
        head.current.vX = -1;
        head.current.vY = 0;
        isActiveRef.current = true;

        return;
      }
      if (key === 'KeyW' || key === 'ArrowUp') {
        event.preventDefault();

        if (head.current.vY === 1) return;
        head.current.vX = 0;
        head.current.vY = -1;
        isActiveRef.current = true;

        return;
      }
      if (key === 'KeyS' || key === 'ArrowDown') {
        event.preventDefault();

        if (head.current.vY === -1) return;
        head.current.vX = 0;
        head.current.vY = 1;
        isActiveRef.current = true;
      }
    },
    [isActiveRef, isPlaying, openShortcuts, pauseRef, togglePause]
  );

  const syncStates = useCallback(() => {
    setShowGameOver(gameOverRef.current);

    setPause(pauseRef.current);
    setIsActive(isActiveRef.current);

    setScore(scoreRef.current);
    setRecord(recordRef.current);
  }, [isActiveRef, pauseRef, setIsActive, setPause]);

  const updateRecord = useCallback(() => {
    if (typeof window === 'undefined') return;

    if (scoreRef.current >= window.localStorage.getItem('record')) {
      window.localStorage.setItem('record', scoreRef.current);
    }

    recordRef.current = window.localStorage.getItem('record');
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    if (!isPlaying) return null;

    const canvas = canvasRef.current;
    const context = canvasRef.current.getContext('2d');

    initCanvas(canvas);
    initGrid(canvas);

    const animate = () => {
      const isDrawing = draw(context, canvas);

      updateRecord();

      syncStates();

      if (!isDrawing) return;

      setTimeout(animate, 1000 / fps);
    };

    animate();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    if (!pause && !showGameOver) return;

    menuBtnRef.current.focus();
  }, [pause, showGameOver]);
  return (
    <>
      <Canvas ref={canvasRef} />

      <ScoringContainer>
        <Stack>
          <Score>
            <ScoreTitle>Record</ScoreTitle>
            <ScoreValue>{record}</ScoreValue>
          </Score>

          <Score>
            <ScoreTitle>Score</ScoreTitle>
            <ScoreValue>{score}</ScoreValue>
          </Score>
        </Stack>
      </ScoringContainer>

      <MenuInstructionsContainer>
        <Center
          maxWidth='100%'
          gutters='0'
          intrinsic
          css={`
            gap: 1rem;
            justify-content: center;
            height: 100%;
            width: 100%;
          `}
        >
          <PlayInstructions
            css={`
              display: ${!isActive && !pause ? `block` : `none`};
            `}
          >
            Press any control keys to start
          </PlayInstructions>

          <GameOver
            css={`
              display: ${showGameOver ? `block` : `none`};
            `}
          >
            Game over
          </GameOver>

          {(pause || showGameOver) && (
            <Menu>
              <MenuItem>
                <MenuButton
                  ref={menuBtnRef}
                  onClick={pause ? handleContinue : handleRetry}
                >
                  {pause ? `Continue` : `Retry`}
                </MenuButton>
              </MenuItem>
              <MenuItem>
                <MenuButton onClick={handleQuit}>Quit</MenuButton>
              </MenuItem>
            </Menu>
          )}
        </Center>
      </MenuInstructionsContainer>
    </>
  );
};
export default GameScreen;

GameScreen.propTypes = {
  fit: PropTypes.bool,
  strokeColor: PropTypes.string,
  onReset: PropTypes.func,
};
GameScreen.defaultProps = {
  fit: false,
  strokeColor: 'rgba(211, 211, 211, 0.59)',
  onReset: undefined,
};
