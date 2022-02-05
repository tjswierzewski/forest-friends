import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import createEmotionCache from '../lib/createEmotionCache';
import theme from '../styles/theme';
import '../styles/typographyGlobal.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  const [accounts, setAccounts] = useState([]);
  const [error, setErrors] = useState(null);

  useEffect(() => {
    extensionSetup();
  }, []);

  const extensionSetup = async () => {
    const polkadotDapp = require('@polkadot/extension-dapp');
    const extension = await polkadotDapp.web3Enable('Forest Friends');
    if (extension.lenth == 0) {
      setErrors('No Extension Installed');
      return;
    }
    const accounts = await polkadotDapp.web3FromSource('polkadot-js');
    setAccounts(accounts);
  };
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header>
          {error}
          <Component {...pageProps} />
        </Header>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
