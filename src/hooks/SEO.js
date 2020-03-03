import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteAuthor: author
        siteUrl
        siteImage
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, image, article, author }) => {
  const { site } = useStaticQuery(getData);

  // from config file
  const {
    siteTitle,
    siteDescription,
    siteAuthor,
    siteUrl,
    siteImage,
    twitterUsername,
  } = site.siteMetadata;

  const seoTitle = title || siteTitle;
  const seoImage = image || siteImage;
  const seoDescription = description || siteDescription;
  const seoAuthor = author || siteAuthor;

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline: title,
    mainEntityOfPage: siteUrl,
    description,
    name: siteTitle,
  };

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage',
      },
      position: 1,
    },
  ];

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  };

  console.log(seoTitle, seoImage, seoAuthor, seoDescription);

  return (
    <Helmet title={seoTitle} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <meta name="author" content={seoAuthor} />
      <meta name="title" content={seoTitle} />

      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${siteUrl}${seoImage}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${siteUrl}${seoImage}`} />

      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {!article && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      )}

      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
};

export default SEO;
