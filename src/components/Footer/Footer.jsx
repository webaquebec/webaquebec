// vendors
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { useInView } from 'react-intersection-observer';

// components
import { hideVisually } from 'polished';
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';
import Stack from '../LayoutSections/Stack/Stack';
import SocialNews from '../SocialNews';
// import LazyAnimation from '../LazyAnimation';

// images
import logo from '../../images/logo-waq-22.svg';

// styles
import {
  footerWrapperStyle,
  Block,
  Title,
  Link,
  Logo,
  ArchivesList,
  ArchiveItem,
  ArchiveLink,
  StyledFooter,
  StickerWrapper,
  Sticker,
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
            threshold='832px'
            space='2rem'
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
                    max-width: 200px;
                  `}
                >
                  Événement coordonné par{' '}
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
                <Title>Pour nous contacter</Title>

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
                    <ArchiveItem key={archive.year}>
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
                    </ArchiveItem>
                  ))}
                </ArchivesList>
              </Block>

              <Block>
                <Title>
                  <Link as={GatsbyLink} to='/code-de-conduite'>
                    Code de conduite
                  </Link>
                </Title>
              </Block>
            </div>
          </Switcher>
        </Stack>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
