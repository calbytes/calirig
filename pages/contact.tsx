import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
      <section className={utilStyles.headingMd}>
        <p>Contact me!</p>
      </section>
    </Layout>
  );
}