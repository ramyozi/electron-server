import React, {ReactNode, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {User} from "../interfaces";

type Props = {
    children: ReactNode;
    title?: string;
    user?: User | null;
};

const Layout = ({ children, title = 'This is the default title', user }: Props) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const renderLinks = () => {
        if (!user) {
            return (
                <>
                    <Link href="/"><a className="nav-link">Accueil</a></Link>
                    {' '}|{' '}
                    <Link href="/about"><a className="nav-link">À propos de nous</a></Link>
                    {' '}|{' '}
                    <Link href="/contact"><a className="nav-link">Contactez-nous</a></Link>
                </>
            );
        }

        switch (user.role) {
            case 'admin':
                return (
                    <>
                        <Link href="/dashboard"><a className="nav-link">Dashboard</a></Link>
                        {' '}|{' '}
                        <Link href="/users"><a className="nav-link">User List</a></Link>
                        {' '}|{' '}
                        <Link href="/create-user"><a className="nav-link">Create User</a></Link>
                        {' '}|{' '}
                        <div className="dropdown">
                            <button className="dropbtn" onClick={handleProfileDropdown}>Profile</button>
                            {showProfileDropdown && (
                                <div className="dropdown-content">
                                    <Link href="/profile"><a className="nav-link">Accéder à votre profil</a></Link>
                                    <a className="nav-link" onClick={() => { sessionStorage.clear(); window.location.href = '/'; }}>Logout</a>
                                </div>
                            )}
                        </div>
                    </>
                );
            case 'doctor':
                return (
                    <>
                        <Link href="/dashboard"><a className="nav-link">Dashboard</a></Link>
                        {' '}|{' '}
                        <Link href="/patients"><a className="nav-link">Patient List</a></Link>
                        {' '}|{' '}
                        <div className="dropdown">
                            <button className="dropbtn" onClick={handleProfileDropdown}>Profile</button>
                            {showProfileDropdown && (
                                <div className="dropdown-content">
                                    <Link href="/profile"><a className="nav-link">Accéder à votre profil</a></Link>
                                    <a className="nav-link" onClick={() => { sessionStorage.clear(); window.location.href = '/'; }}>Logout</a>
                                </div>
                            )}
                        </div>
                    </>
                );
            case 'nurse':
                return (
                    <>
                        <Link href="/dashboard"><a className="nav-link">Dashboard</a></Link>
                        {' '}|{' '}
                        <Link href="/patients"><a className="nav-link">Patient List</a></Link>
                        {' '}|{' '}
                        <Link href="/create-patient"><a className="nav-link">Add Patient</a></Link>
                        {' '}|{' '}
                        <div className="dropdown">
                            <button className="dropbtn" onClick={handleProfileDropdown}>Profile</button>
                            {showProfileDropdown && (
                                <div className="dropdown-content">
                                    <Link href="/profile"><a className="nav-link">Accéder à votre profil</a></Link>
                                    <a className="nav-link" onClick={() => { sessionStorage.clear(); window.location.href = '/'; }}>Logout</a>
                                </div>
                            )}
                        </div>
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
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <style jsx>{`
                    .nav-link {
                        text-decoration: none;
                        color: black;
                        padding: 10px;
                        background-color: transparent;
                        border: none;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    .dropdown {
                        position: relative;
                        display: inline-block;
                    }
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: #f9f9f9;
                        min-width: 160px;
                        z-index: 1;
                    }
                    .dropdown-content a {
                        color: black;
                        padding: 12px 16px;
                        text-decoration: none;
                        display: block;
                    }
                    .dropdown-content a:hover {
                        background-color: #f1f1f1;
                    }
                    .dropdown:hover .dropdown-content {
                        display: block;
                    }
                `}</style>
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
