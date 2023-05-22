// vendors
import React, { useCallback } from 'react';
import { hideVisually } from 'polished';

// contexts
import { useSnakeGame } from '../SnakeGame.context';

// components
import Stack from '../../LayoutSections/Stack';

// styles
import {
  CloseButton,
  Container,
  SectionColumns,
  SectionTitle,
  Title,
  Wrapper,
} from './KeyboardControlsMap.styles';

const KeyboardControlsMap = () => {
  const { setOpenKeyboardControlsMap } = useSnakeGame();

  const handleClose = useCallback(() => {
    setOpenKeyboardControlsMap(false);
  }, [setOpenKeyboardControlsMap]);

  return (
    <Container>
      <Wrapper>
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 1rem;
          `}
        >
          <Title>Keyboard Controls</Title>
          <CloseButton type='button' onClick={handleClose}>
            <span css={hideVisually}>Fermer</span>
            <span>x</span>
          </CloseButton>
        </div>

        <Stack>
          <Stack as='section' space='0.5rem'>
            <SectionTitle>Menu Navigation</SectionTitle>

            <Stack space='0.35rem'>
              <SectionColumns>
                <div>Select next item</div>
                <div>Tab</div>
              </SectionColumns>
              <SectionColumns>
                <div>Select previous item</div>
                <div>Shift + Tab</div>
              </SectionColumns>
              <SectionColumns>
                <div>Validate selection</div>
                <div>Enter</div>
              </SectionColumns>
            </Stack>
          </Stack>
          <Stack as='section' space='0.5rem'>
            <SectionTitle>Game Controls</SectionTitle>

            <Stack space='0.35rem'>
              <SectionColumns>
                <div>Pause/Play</div>
                <div>Space</div>
              </SectionColumns>
            </Stack>
          </Stack>
          <Stack as='section' space='0.5rem'>
            <SectionTitle>Snake Controls</SectionTitle>

            <Stack space='0.35rem'>
              <SectionColumns>
                <div>Left</div>
                <div>Arrow Left or A</div>
              </SectionColumns>
              <SectionColumns>
                <div>Right</div>
                <div>Arrow Right or D</div>
              </SectionColumns>
              <SectionColumns>
                <div>Up</div>
                <div>Arrow Up or W</div>
              </SectionColumns>
              <SectionColumns>
                <div>Down</div>
                <div>Arrow Down or S</div>
              </SectionColumns>
            </Stack>
          </Stack>
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default KeyboardControlsMap;
