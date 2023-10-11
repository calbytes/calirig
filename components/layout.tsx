import React from 'react';
import Head from 'next/head';
import NavigationBar from './navigationbar';
import Footer from './footer.component';
import { getCookie } from 'cookies-next';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Calirig" content="www.calirig.net" />
        <meta name="description" content="CaliRig Projects" />
      </Head>

      <header>
        <NavigationBar role="xxx"/>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
}