// vendors
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// components
import { useTranslation } from 'react-i18next';
import { hideVisually } from 'polished';
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';
import Stack from '../LayoutSections/Stack/Stack';
import SocialNews from '../SocialNews';

// images
import logo from '../../images/logo-waq.svg';
import logoVilleDeQuebec from '../../images/logoPartners/footer/logo-ville-de-quebec.svg';
import logoQuebec from '../../images/logoPartners/footer/logo-quebec.svg';
import logoPortQuebec from '../../images/logoPartners/footer/logo-port-quebec.svg';

// styles
import {
  footerWrapperStyle,
  Block,
  Title,
  Link,
  Logo,
  ArchivesList,
  ArchiveLink,
  StyledFooter,
  FooterPartners,
  FooterLogo,
} from './Footer.styles';

const Footer = () => {
  const { t } = useTranslation();

  const archives = [
    {
      year: '2023',
      link: '/programmation/2023',
      type: 'internal',
    },
    {
      year: '2022',
      link: '/programmation/2022',
      type: 'internal',
    },
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

  return (
    <StyledFooter>
      <Center maxWidth='1064px' gutters='var(--container-gutter)'>
        <Stack space='94px'>
          <SocialNews />

          <Switcher
            threshold='768px'
            space='1.5rem'
            limit={4}
            css={footerWrapperStyle}
          >
            <div>
              <Block>
                <Title>
                  <span css={hideVisually}>Web à Québec</span>

                  <Link as={GatsbyLink} to='/'>
                    <Logo src={logo} alt='Accueil' />
                  </Link>
                </Title>

                <p
                  css={`
                    max-width: 130px;
                  `}
                >
                  {t('footer.coordinatedBy')}{' '}
                  <Link
                    href='https://quebecnumerique.com/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Québec numérique
                  </Link>
                </p>
              </Block>

              <Block>
                <Title>{t('footer.contact')}</Title>

                <Link href='tel:1-877-334-2547'>1-877-334-2547</Link>
                <br />
                <Link href='mailto:info@webaquebec.org'>
                  info@webaquebec.org
                </Link>
              </Block>

              <Block>
                <Title>Archives</Title>

                <ArchivesList>
                  {archives.map((archive) => (
                    <li key={archive.year}>
                      {archive.type && archive.type === 'internal' ? (
                        <ArchiveLink as={GatsbyLink} to={archive.link}>
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
                    </li>
                  ))}
                </ArchivesList>
              </Block>

              <Block>
                <Title>
                  <Link as={GatsbyLink} to='/code-de-conduite'>
                    Code de conduite
                  </Link>
                </Title>
                <Title>
                  <Link
                    as={GatsbyLink}
                    to='/politique-et-confidentialite'
                    css={`
                      white-space: pre;
                    `}
                  >
                    Politique et confidentialité
                  </Link>
                </Title>
              </Block>
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
