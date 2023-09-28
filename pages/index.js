import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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