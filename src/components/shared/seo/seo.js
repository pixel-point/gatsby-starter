/* eslint-disable react/prop-types */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import createMetaImagePath from 'utils/create-meta-image-path';

const SEO = ({ data = {} }) => {
  const {
    title,
    metaDesc,
    metaKeywords,
    opengraphUrl,
    opengraphDescription,
    opengraphTitle,
    twitterTitle,
    twitterDescription,
    opengraphImage,
    twitterImage,
    canonical,
  } = data;

  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query getSettingsQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: settings.language,
        prefix: 'og: http://ogp.me/ns#',
      }}
    >
      {/* General */}
      <meta name="description" content={metaDesc} />
      {metaKeywords !== '' && <meta name="description" content={metaKeywords} />}
      {/* Open Graph */}
      <meta property="og:url" content={opengraphUrl} />
      <meta property="og:title" content={opengraphTitle} />
      <meta property="og:description" content={opengraphDescription} />
      <meta property="og:type" content="website" />
      {opengraphImage && (
        <meta property="og:image" content={createMetaImagePath(opengraphImage, siteUrl)} />
      )}
      {/* Twitter */}
      {twitterTitle !== '' && <meta name="twitter:title" content={twitterTitle} />}
      {twitterDescription !== '' && (
        <meta name="twitter:description" content={twitterDescription} />
      )}
      {twitterImage && (
        <meta property="twitter:image" content={createMetaImagePath(twitterImage, siteUrl)} />
      )}
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default SEO;
