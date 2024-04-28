// vendors
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

// components
import Center from '../../../components/LayoutSections/Center';

// styles
import {
  atRight,
  ContentWrapper,
  SectionText,
  SectionPicture,
  SectionTitle,
  ArchivesList,
  ArchiveItem,
  ArchiveLink,
} from './AboutEventSection.styles';

const AboutEventSection = ({ items }) => {
  const archives = [
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

  return (
    <>
      <h3 css={hideVisually}>Points forts de l&apos;événement</h3>

      <Center maxWidth='1080px' gutters='16px'>
        {items.map((item, index) => (
          <ContentWrapper key={item.id} css={index === 1 && atRight}>
            <div>
              <SectionPicture fluid={item.photoSrc} alt={item.title} />
              <SectionTitle>{item.title}</SectionTitle>
              <SectionText dangerouslySetInnerHTML={{ __html: item.text }} />
              {item.hasArchives && (
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
              )}
            </div>
          </ContentWrapper>
        ))}
      </Center>
    </>
  );
};

AboutEventSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      photoSrc: PropTypes.shape({
        src: PropTypes.string,
        srcSet: PropTypes.string,
        srcSetWebp: PropTypes.string,
        aspecRatio: PropTypes.number,
        base64: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default AboutEventSection;
