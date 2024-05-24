// vendors
import React from 'react';

// components
import { useTranslation } from 'react-i18next';

// images
import imgTerminal from '../../../images/liveTheWAQ/img-terminal.jpg';
import img5a7 from '../../../images/liveTheWAQ/img-5-a-7.jpg';
import imgGrizzlyFuzz from '../../../images/liveTheWAQ/img-grizzly-fuzz.jpg';

// styles
import {
  PictureWrapper,
  TextWrapper,
  SwitcherWrapper,
} from './PicturesSection.styles';

const PicturesSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SwitcherWrapper>
        <PictureWrapper>
          <img src={imgTerminal} alt={t('liveTheWAQ.getThere.alt')} />
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
          <img src={img5a7} alt={t('liveTheWAQ.party.alt')} />
        </PictureWrapper>
        <TextWrapper>
          <h2>{t('liveTheWAQ.party.title')}</h2>
          <p>{t('liveTheWAQ.party.text1')}</p>
          <p>{t('liveTheWAQ.party.text2')}</p>
        </TextWrapper>
      </SwitcherWrapper>

      <SwitcherWrapper>
        <PictureWrapper>
          <img src={imgGrizzlyFuzz} alt={t('liveTheWAQ.closing.alt')} />
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

export default PicturesSection;
