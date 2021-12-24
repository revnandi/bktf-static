import React, { useState } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { NavigationWaypoint } from '../typings/declarations';
import { Trans, useTranslation, I18nextContext } from 'gatsby-plugin-react-i18next';

import meta_image from '../images/meta.png'

import Header from '../components/header';
import Main from '../components/main';

const Home = () => {
  const context = React.useContext(I18nextContext);
  const {t} = useTranslation();
  const [activeWaypoint, setActiveWaypoint] = useState<NavigationWaypoint>(null);

  const updateWaypoint = (newWaypoint: NavigationWaypoint) => {
    setActiveWaypoint(newWaypoint);
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="hu" />
        <title>
          { context.language === 'hu' ? 'Kortárstánc Művész | BKTF' : 'Contemporary Dancer | BKTF'}
        </title>
        <meta name="description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
        <link rel="canonical" href={ t('site_url')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ t('site_url')} />
        <meta property="og:title" content={ t('site_title')} />
        <meta property="og:description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
        <meta property="og:image" content={meta_image } />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={ t('site_url')} />
        <meta property="twitter:title" content={ t('site_title')} />
        <meta property="twitter:description" content="A Budapest Kortástánc Főiskola Kortárstánc művész képzésének oldala." />
        <meta property="twitter:image" content={ meta_image } />
      </Helmet>
      <Header currentWaypoint={ activeWaypoint }/>
      <Main passedFunction={ updateWaypoint }/>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;