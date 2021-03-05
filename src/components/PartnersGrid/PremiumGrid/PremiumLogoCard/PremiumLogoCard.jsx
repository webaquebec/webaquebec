// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import { Container, Link, Wrapper, Image } from './PremiumLogoCard.styles';

const PremiumLogoCard = ({ image, accentBgColor, ...rest }) => (
  <Container {...rest}>
    <Link href={image.url} $accentBgColor={accentBgColor}>
      <Wrapper centered='img' minHeight='218px' noPadding>
        <Image src={image.src} alt={image.alt} />
      </Wrapper>
    </Link>
  </Container>
);

PremiumLogoCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  accentBgColor: PropTypes.string,
};

PremiumLogoCard.defaultProps = {
  accentBgColor: undefined,
};

export default PremiumLogoCard;
