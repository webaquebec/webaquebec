import React from 'react';

// components
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';
import HeroSection from '../views/BlogPostView/HeroSection/HeroSection';

const BlogPostPage = () => {
  return (
    <Layout asGradient={false}>
      <SectionContainer faded>
        <HeroSection
          title='10 bonnes raisons d’acheter ton billet pour le WAQ'
          publishDate='2 janvier 2021'
          featuredPicture='https://via.placeholder.com/998x531'
        />
      </SectionContainer>
    </Layout>
  );
};

export default BlogPostPage;
