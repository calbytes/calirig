import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import styles from '../components/layout.module.css';

export default function About() {
    return (
      <Layout>
        <Head>
          <title>About</title>
        </Head>

        <div className={styles.container}>
          <div className={styles.about}>
            <Image priority className={utilStyles.borderCircle} 
            width={128} height={128} src="/images/profile.jpg"/>

            <h1 className={utilStyles.heading2Xl}>CaliRig</h1>
          </div>

          <section className={utilStyles.headingMd}>
            <p>Hello, I'm Carlos. I'm a full stack software engineer w industry experience
              in security and R&D robotics. I'll be exhibiting some of my latest personal 
              projects here on my site. Feel free to reach out if you have any questions or comments.
            </p>
          </section>
        </div>
      </Layout>
    );
  }