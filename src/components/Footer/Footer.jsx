// vendors
import React from 'react';
import { Link } from 'gatsby';
import { css } from 'styled-components';

// utils
import breakpointsRange from '../../utils/breakpointsRange';

// components
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';

// images
import logo from '../../images/logo.svg';

// styles
import breakpoints from '../../styles/breakpoints';
import {
  FooterTitle,
  ContactLink,
  HomeBlock,
  ArchivesList,
  ArchiveItem,
  ArchiveLink,
} from './Footer.styles';

const footerWrapper = css`
  ${breakpointsRange(
    [{ prop: 'marginTop', sizes: [60, 90], bases: [16, 20] }],
    breakpoints.spacings
  )};
`;

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

  return (
    <Center css={footerWrapper} maxWidth='1064px' gutters='32px'>
      <Switcher threshold='768px' space='2rem' limit={3}>
        <div>
          <div>
            <FooterTitle>Pour nous contacter</FooterTitle>
            <ContactLink href='tel:1-877-334-2547'>1-877-334-2547</ContactLink>
            <ContactLink href='mailto:info@webaquebec.org'>
              info@webaquebec.org
            </ContactLink>
          </div>
          <HomeBlock>
            <Link to='/'>
              <img src={logo} alt='Accueil' />
            </Link>
          </HomeBlock>
          <div>
            <FooterTitle>Archives</FooterTitle>
            <ArchivesList>
              {archives.map((year) => (
                <ArchiveItem key={year.year}>
                  <Link to={year.link} css={ArchiveLink}>
                    {year.year}
                  </Link>
                </ArchiveItem>
              ))}
            </ArchivesList>
          </div>
        </div>
      </Switcher>
    </Center>
  );
};

export default Footer;
