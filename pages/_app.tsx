import '../styles/global.css';
import { AppProps } from 'next/app';
import React, { useState } from 'react';
import Dashboard from './private/dashboard';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}