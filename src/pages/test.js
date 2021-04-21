// vendors
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

// components
import Center from '../components/LayoutSections/Center';
import Layout from '../components/Layout';
import CardGrid from '../components/CardGrid';
import Card from '../components/CardGrid/Card';
import StyledSectionContainer from '../components/SectionContainer';

const SectionContainer = styled(StyledSectionContainer)``;

const query = graphql`
  query {
    pictureDesktop: file(relativePath: { eq: "img-unicorn-yiha.jpg" }) {
      childImageSharp {
        ...CardShortPicture
      }
    }

    pictureMobile: file(relativePath: { eq: "img-unicorn-yiha.jpg" }) {
      childImageSharp {
        ...CardLongPicture
      }
    }
  }
`;

const TestPage = () => {
  const data = useStaticQuery(query);

  const {
    pictureDesktop: {
      childImageSharp: { desktop },
    },
    pictureMobile: {
      childImageSharp: { mobile },
    },
  } = data;

  const pictureSources = {
    childImageSharp: {
      desktop,
      mobile,
    },
  };

  const nodes = [
    {
      to: '/',
      title: 'This is a title',
      content: (
        <div>
          <p>Date</p>
          <p>Lorem ipsum bla bla bla</p>
        </div>
      ),
      picture: pictureSources,
      buttonText: 'Bonjour Québec!',
    },
    {
      to: '/',
      title: 'This is a title',
      content: (
        <div>
          <p>Date</p>
          <p>Lorem ipsum bla bla bla</p>
        </div>
      ),
      picture: pictureSources,
      buttonText: 'Bonjour Québec!',
    },
    {
      to: '/',
      title: 'This is a title',
      content: (
        <div>
          <p>Date</p>
          <p>Lorem ipsum bla bla bla</p>
        </div>
      ),
      picture: pictureSources,
      buttonText: 'Bonjour Québec!',
    },
  ];

  return (
    <Layout>
      <SectionContainer faded>
        <Center maxWidth='var(--max-container-width)'>
          <CardGrid>
            {nodes.map((node) => (
              <Card key={node.to} {...node} />
            ))}
          </CardGrid>
        </Center>
      </SectionContainer>
    </Layout>
  );
};

export default TestPage;
