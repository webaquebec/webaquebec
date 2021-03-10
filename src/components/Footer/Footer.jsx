// vendors
import React from 'react';
import { Link } from 'gatsby';

// components
import Center from '../LayoutSections/Center';
import Switcher from '../LayoutSections/Switcher';

// images
import logo from '../../images/logo-waq-2021.svg';

// styles
import {
  StyledFooter,
  FooterTitle,
  ContactLink,
  HomeBlock,
  Logo,
  ArchivesList,
  ArchiveItem,
  ArchiveLink,
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

  return (
    <StyledFooter>
      <Center maxWidth='1064px' gutters='32px'>
        <Switcher threshold='768px' space='2rem' limit={3}>
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

            <HomeBlock>
              <Link to='/'>
                <Logo src={logo} alt='Accueil' />
              </Link>
            </HomeBlock>

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
      </Center>
    </StyledFooter>
  );
};

export default Footer;
