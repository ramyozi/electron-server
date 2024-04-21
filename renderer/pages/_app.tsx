// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../public/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
            <Component {...pageProps} />
    );
}

export default MyApp;
