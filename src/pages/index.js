import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet';

import Header from '../components/header';
import Main from '../components/main';

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header/>
      <Main/>
    </Layout>
  );
};

export default Home;