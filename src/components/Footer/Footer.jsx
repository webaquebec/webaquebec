// vendors
import React from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';

// components
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';
import Stack from '../LayoutSections/Stack/Stack';
import SocialNews from '../SocialNews';
// import LazyAnimation from '../LazyAnimation';

// images
import logo from '../../images/logo-waq-21.svg';

// styles
import {
  StyledFooter,
  FooterWrapper,
  FooterTitle,
  ContactLink,
  LogoWrapper,
  Logo,
  ArchivesList,
  ArchiveItem,
  ArchiveLink,
  StickerWrapper,
  Sticker,
} from './Footer.styles';

const Footer = () => {
  // @TODO: Ajouter les bons liens
  const archives = [
    { year: '2020', link: '' },
    { year: '2019', link: '' },
    { year: '2018', link: '' },
    { year: '2017', link: '' },
    { year: '2016', link: '' },
    { year: '2015', link: '' },
    { year: '2014', link: '' },
    { year: '2013', link: '' },
    { year: '2012', link: '' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <StyledFooter>
      <Center maxWidth='1064px' gutters='32px'>
        <Stack space='94px'>
          <div
            ref={ref}
            css={`
              position: relative;
            `}
          >
            <StickerWrapper>
              <Sticker
                style={{ '--playState': inView ? 'running' : 'paused' }}
              />
            </StickerWrapper>

            <SocialNews />
          </div>

          <Switcher
            threshold='768px'
            space='2rem'
            limit={3}
            css={FooterWrapper}
          >
            <div>
              <div>
                <FooterTitle>Pour nous contacter</FooterTitle>

                <ContactLink href='tel:1-877-334-2547'>
                  1-877-334-2547
                </ContactLink>
                <ContactLink href='mailto:info@webaquebec.org'>
                  info@webaquebec.org
                </ContactLink>
              </div>

              <LogoWrapper>
                <Link to='/'>
                  <Logo src={logo} alt='Accueil' />
                </Link>
              </LogoWrapper>

              <div>
                <FooterTitle>Archives</FooterTitle>

                <ArchivesList>
                  {archives.map((year) => (
                    <ArchiveItem key={year.year}>
                      <ArchiveLink href={year.link}>{year.year}</ArchiveLink>
                    </ArchiveItem>
                  ))}
                </ArchivesList>
              </div>
            </div>
          </Switcher>
        </Stack>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
