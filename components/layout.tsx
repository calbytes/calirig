import React from 'react';
import Head from 'next/head';
import NavigationBar from './navigationbar';
import Footer from './footer.component';

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
        <meta name="Calirig" content="www.calirig.net" />
      </Head>

      <header>
        <NavigationBar role="admin"/>
      </header>

      <main>{children}</main>

      <Footer />
    </>
  );
}