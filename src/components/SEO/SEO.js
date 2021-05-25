/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image, langLinks }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaImage = `${site.siteMetadata.siteUrl}${
    image || site.siteMetadata.image
  }`;
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
      ].concat(meta)}
    >
      {langLinks.map((link) => (
        <link
          key={link.href}
          rel='alternate'
          hrefLang={link.langKey}
          href={link.href}
        />
      ))}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
  image: ``,
  langLinks: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  langLinks: PropTypes.arrayOf(
    PropTypes.shape({
      langKey: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

export default SEO;
