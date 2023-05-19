// vendors
import React, { useCallback } from 'react';

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
            x
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
                <div>A or Left Arrow</div>
              </SectionColumns>
              <SectionColumns>
                <div>Right</div>
                <div>D or Right Arrow</div>
              </SectionColumns>
              <SectionColumns>
                <div>Up</div>
                <div>W or Up Arrow</div>
              </SectionColumns>
              <SectionColumns>
                <div>Down</div>
                <div>S or Down Arrow</div>
              </SectionColumns>
            </Stack>
          </Stack>
        </Stack>
      </Wrapper>
    </Container>
  );
};

export default KeyboardControlsMap;
