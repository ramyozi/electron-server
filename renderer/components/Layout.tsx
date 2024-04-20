// renderer/components/Layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {User} from "../interfaces";

type Props = {
    children: ReactNode;
    title?: string;
    user?: User | null;
};

const Layout = ({ children, title = 'This is the default title', user }: Props) => {
    const renderLinks = () => {
        if (!user) {
            return (
                <>
                    <Link href="/">
                        <a>Accueil</a>
                    </Link>{' '}
                    |{' '}
                    <Link href="/about">
                        <a>À propos de nous</a>
                    </Link>
                    {' '}|{' '}
                    <Link href="/contact">
                        <a>Contactez-nous</a>
                    </Link>
                </>
            );
        }

        switch (user.role) {
            case 'admin':
                return (
                    <>
                        <Link href="/dashboard">
                            <a>Dashboard</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/users">
                            <a>User List</a>
                        </Link>
                        {' '}|{' '}
                        <Link href="/users/create">
                            <a>Create User</a>
                        </Link>
                        {' '}|{' '}
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </>
                );
            case 'nurse':
                return (
                    <>
                        <Link href="/dashboard">
                            <a>Dashboard</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/patients">
                            <a>Patient List</a>
                        </Link>
                        {' '}|{' '}
                        <Link href="/patients/create">
                            <a>Add Patient</a>
                        </Link>
                        {' '}|{' '}
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </>
                );
            case 'doctor':
                return (
                    <>
                        <Link href="/dashboard">
                            <a>Dashboard</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/users">
                            <a>User List</a>
                        </Link>
                        {' '}|{' '}
                        <Link href="/profile">
                            <a>Profile</a>
                        </Link>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <nav>{renderLinks()}</nav>
            </header>
            {children}
            <footer>
                <hr />
                {user ? (
                    <span>All rights reserved to Patientcare Organization</span>
                ) : (
                    <span>All rights reserved to Patientcare Org</span>
                )}
            </footer>
        </div>
    );
};

export default Layout;
