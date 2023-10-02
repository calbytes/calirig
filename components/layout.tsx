import React from 'react';
import Head from 'next/head';
import styles from './layout.module.css';
import NavigationBar from './navigationbar';


interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Calirig" content="Welcome to Calirig.net" />
      </Head>

      <header>
        <NavigationBar />
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        www.calirig.net - All rights reserved - Carlos Lara
      </footer>
    </>
  );
}