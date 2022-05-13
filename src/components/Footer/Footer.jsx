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
import logo from '../../images/logo-waq-22.svg';
import logoVilleDeQuebec from '../../images/logoPartners/footer/logo-ville-de-quebec.svg';
import logoQuebec from '../../images/logoPartners/footer/logo-quebec.svg';
import logoPortQuebec from '../../images/logoPartners/footer/logo-port-quebec.svg';

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
  FooterPartners,
  FooterLogo,
} from './Footer.styles';

const Footer = () => {
  const archives = [
    {
      year: '2021',
      link: '/programmation/2021',
      type: 'internal',
    },
    {
      year: '2020',
      link: 'https://archives.webaquebec.org/programmation/2020/0',
    },
    {
      year: '2019',
      link: 'https://archives.webaquebec.org/programmation/2019/0',
    },
    {
      year: '2018',
      link: 'https://archives.webaquebec.org/programmation/2018/0',
    },
    {
      year: '2017',
      link: 'https://archives.webaquebec.org/programmation/2017/0',
    },
    { year: '2016', link: 'https://2016.webaquebec.org/' },
    { year: '2015', link: 'https://2015.webaquebec.org/' },
    { year: '2014', link: 'https://2014.webaquebec.org/' },
    { year: '2013', link: 'https://2013.webaquebec.org/' },
    { year: '2012', link: 'https://2012.webaquebec.org/' },
  ];

  const footerPartners = [
    {
      src: logoVilleDeQuebec,
      alt: 'Ville de Québec',
      url: 'https://www.ville.quebec.qc.ca/',
    },
    {
      src: logoQuebec,
      alt: 'Québec',
      url: 'https://www.quebec.ca/',
    },
    {
      src: logoPortQuebec,
      alt: 'Port de Québec',
      url: 'https://www.portquebec.ca/',
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <StyledFooter>
      <Center maxWidth='1064px' gutters='var(--container-gutter)'>
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
                  {archives.map((archive) => (
                    <ArchiveItem key={archive.year}>
                      {archive.type && archive.type === 'internal' ? (
                        <ArchiveLink as={Link} to={archive.link}>
                          {archive.year}
                        </ArchiveLink>
                      ) : (
                        <ArchiveLink
                          href={archive.link}
                          rel='noopener noreferrer'
                          target='_blank'
                        >
                          {archive.year}
                        </ArchiveLink>
                      )}
                    </ArchiveItem>
                  ))}
                </ArchivesList>
              </div>
            </div>
          </Switcher>

          <FooterPartners>
            {footerPartners.map((image) => (
              <FooterLogo
                href={image.url}
                key={image.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={image.src} alt={image.alt} />
              </FooterLogo>
            ))}
          </FooterPartners>
        </Stack>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
