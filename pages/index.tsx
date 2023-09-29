import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import React from 'react';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Calirig</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Welcome to CaliRig.net!!!!</p>
      </section>
    </Layout>
  );
}