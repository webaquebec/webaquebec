// vendors
import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';

// components
import { useTranslation } from 'react-i18next';

// styles
import {
  PictureWrapper,
  TextWrapper,
  SwitcherWrapper,
} from './PicturesSection.styles';

const PicturesSection = ({ pictures }) => {
  const { t } = useTranslation();

  return (
    <div>
      <SwitcherWrapper>
        <PictureWrapper>
          <GatsbyImage
            fluid={pictures.first}
            alt={t('liveTheWAQ.getThere.alt')}
            role='presentation'
          />
        </PictureWrapper>
        <TextWrapper>
          <h2>{t('liveTheWAQ.getThere.title')}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('liveTheWAQ.getThere.text'),
            }}
          />
          <ul>
            <li
              dangerouslySetInnerHTML={{
                __html: t('liveTheWAQ.getThere.bullet1'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('liveTheWAQ.getThere.bullet2'),
              }}
            />
            <li
              dangerouslySetInnerHTML={{
                __html: t('liveTheWAQ.getThere.bullet3'),
              }}
            />
          </ul>
        </TextWrapper>
      </SwitcherWrapper>

      <SwitcherWrapper>
        <PictureWrapper>
          <GatsbyImage
            fluid={pictures.second}
            alt={t('liveTheWAQ.party.alt')}
            role='presentation'
          />
        </PictureWrapper>
        <TextWrapper>
          <h2>{t('liveTheWAQ.party.title')}</h2>
          <p>{t('liveTheWAQ.party.text1')}</p>
          <p>{t('liveTheWAQ.party.text2')}</p>
        </TextWrapper>
      </SwitcherWrapper>

      <SwitcherWrapper>
        <PictureWrapper>
          <GatsbyImage
            fluid={pictures.third}
            alt={t('liveTheWAQ.closing.alt')}
            role='presentation'
          />
        </PictureWrapper>
        <TextWrapper>
          <h2>{t('liveTheWAQ.closing.title')}</h2>
          <p>{t('liveTheWAQ.closing.text1')}</p>
          <p>{t('liveTheWAQ.closing.text2')}</p>
          <p>{t('liveTheWAQ.closing.text3')}</p>
        </TextWrapper>
      </SwitcherWrapper>
    </div>
  );
};

PicturesSection.propTypes = {
  pictures: PropTypes.shape({
    first: PropTypes.shape({}).isRequired,
    second: PropTypes.shape({}).isRequired,
    third: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default PicturesSection;
