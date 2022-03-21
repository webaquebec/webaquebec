// vendors
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import { Link, Image } from './LogoCard.styles';

const LogoCard = ({ image, isPremium }) => {
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
    <Link
      href={image.url}
      target='_blank'
      rel='noopener noreferrer'
      onMouseOver={srcAlt ? handleMouseOver : undefined}
      onMouseOut={srcAlt ? handleMouseOut : undefined}
      onFocus={srcAlt ? handleMouseOver : undefined}
      onBlur={srcAlt ? handleMouseOut : undefined}
      $isPremium={isPremium}
    >
      <Image src={imageSrc} alt={image.alt} />
    </Link>
  );
};

LogoCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcAlt: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  isPremium: PropTypes.bool,
};

LogoCard.defaultProps = {
  isPremium: false,
};

export default LogoCard;
