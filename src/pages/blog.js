// vendors
import React from 'react';

// components
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Center from '../components/LayoutSections/Center';

// views
import FeaturedBlogPost from '../views/BlogPageView/FeaturedBlogPost';

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        title='Blogue'
        description='Le plus grand événement numérique francophone en Amérique du Nord.'
      />

      <Center maxWidth='var(--max-container-width)' gutters='16px'>
        <FeaturedBlogPost />
      </Center>
    </Layout>
  );
};

export default BlogPage;
