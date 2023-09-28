import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <p>Contact me!</p>
      </section>
    </Layout>
  );
}