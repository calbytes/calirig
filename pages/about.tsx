import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Image from 'next/image';

export default function About(): JSX.Element {
  return (
    <Layout title="About">
      <div className={styles.container}>
        <div className={styles.about}>
          <Image className={utilStyles.borderCircle}
            src="/images/profile.jpg"
            width={128} height={128}
            priority alt="Picture of the Author"/>

          <h1 className={utilStyles.heading2Xl}>www.calirig.net</h1>
        </div>

        <section className={utilStyles.headingMd}>
          <p>Hello, I'm Carlos. I'm a full stack software engineer with industry experience
            in security and R&D robotics. I'll be exhibiting some of my latest personal 
            projects here on my site. Register an account to get access. Feel free to reach 
            out if you have any questions or comments. 
          </p>
        </section>
      </div>
    </Layout>
  );
}