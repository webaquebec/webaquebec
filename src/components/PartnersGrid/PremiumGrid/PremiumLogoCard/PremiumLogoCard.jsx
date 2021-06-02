// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import { Container, Link, Wrapper, Image } from './PremiumLogoCard.styles';

const PremiumLogoCard = ({ image, accentBgColor, ...rest }) => {
  const { src, srcAlt } = image;

  const [imageSrc, setImageSrc] = useState(src);

  const handleMouseOver = React.useCallback(() => {
    setImageSrc(srcAlt);
  }, [srcAlt]);

  const handleMouseOut = React.useCallback(
    (event) => {
      // Workaround to not change image source if focus is active on the element
      if (event.currentTarget === document.activeElement) {
        return;
      }
      setImageSrc(src);
    },
    [src]
  );

  return (
    <Container {...rest}>
      <Link
        href={image.url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseOver={srcAlt ? handleMouseOver : undefined}
        onMouseOut={srcAlt ? handleMouseOut : undefined}
        onFocus={srcAlt ? handleMouseOver : undefined}
        onBlur={srcAlt ? handleMouseOut : undefined}
        $accentBgColor={accentBgColor}
      >
        <Wrapper centered='img' minHeight='218px' noPadding>
          <Image src={imageSrc} alt={image.alt} />
        </Wrapper>
      </Link>
    </Container>
  );
};

PremiumLogoCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcAlt: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  accentBgColor: PropTypes.string,
};

PremiumLogoCard.defaultProps = {
  accentBgColor: undefined,
};

export default PremiumLogoCard;
