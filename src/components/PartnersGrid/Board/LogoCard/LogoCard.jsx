// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Container, Link, Wrapper, Image } from './LogoCard.styles';

const LogoCard = ({
  image,
  verticalPosition,
  horizontalPosition,
  offsetX,
  offsetY,
  borderWidth,
  ...rest
}) => (
  <Container
    $verticalPosition={verticalPosition}
    $horizontalPosition={horizontalPosition}
    $offsetX={offsetX}
    $offsetY={offsetY}
    $borderWidth={borderWidth}
    {...rest}
  >
    <Link href={image.url} target='_blank' rel='noopener noreferrer'>
      <Wrapper centered='img' minHeight='100%' noPadding>
        <Image src={image.src} alt={image.alt} />
      </Wrapper>
    </Link>
  </Container>
);

LogoCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  verticalPosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
  horizontalPosition: PropTypes.oneOf(['left', 'right']).isRequired,
  offsetX: PropTypes.string,
  offsetY: PropTypes.string,
  borderWidth: PropTypes.number,
};

LogoCard.defaultProps = {
  offsetX: undefined,
  offsetY: undefined,
  borderWidth: 4,
};

export default LogoCard;
