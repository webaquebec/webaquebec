// vendors
import styled from 'styled-components';

// styles
import colors from '../../../styles/colors';
import { fontFamilies } from '../../../styles/typography';
import { glow } from '../SnakeGame.styles';

export const Container = styled.div`
  position: absolute;
  inset: 0;

  z-index: 1;

  background: ${`linear-gradient(
    to right,
    hsla(${colors.mauve80hsl.hue}, ${colors.mauve80hsl.saturation}%,15%, 0.9) 33%,
    hsla(${colors.mauve80hsl.hue}, ${colors.mauve80hsl.saturation}%,15%, 0.6),
    hsla(${colors.mauve80hsl.hue}, ${colors.mauve80hsl.saturation}%,15%, 0.9) 66%
  )`};
  border-radius: inherit;
`;

export const Wrapper = styled.div`
  padding: 1.5rem 2.2rem;

  color: ${colors.peach};
  font-size: 0.875rem;
  font-family: ${fontFamilies.pressStart2P};

  animation: ${glow} 2s linear infinite;
`;

export const Title = styled.h2`
  font-size: 0.75em;
`;

export const Section = styled.section``;

export const SectionTitle = styled.h3`
  padding-bottom: 4px;

  font-size: 0.65em;

  border-bottom: 2px solid currentColor;
`;

export const SectionContent = styled.div``;

export const SectionColumns = styled.div`
  font-size: 0.5em;

  columns: 2;

  > div:last-child {
    text-align: right;
    text-transform: uppercase;
  }
`;

export const CloseButton = styled.button`
  margin: 0;
  padding: 0;

  line-height: 1;

  border: 0;

  cursor: pointer;

  appearance: none;
`;
