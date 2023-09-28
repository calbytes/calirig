import Head from 'next/head';
import styles from './layout.module.css';
import NavigationBar from './navigationbar';


export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Calirig" content="Welcome to Calirig.net"/>
      </Head>

      <header className={styles.header}>
        <NavigationBar/>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        Calirig - All rights reserved - Carlos Lara
      </footer>
    </>
  );
}