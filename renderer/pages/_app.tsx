// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import '../public/styles/global.css';
import {UserProvider} from "../context/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
