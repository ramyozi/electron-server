import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { User } from "../interfaces";
import {GiFrayedArrow} from "react-icons/gi";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import SidebarComponent from "./UI/SidebarComponent";

type Props = {
    children: ReactNode;
    title?: string;
    user?: User | null;
};

const Layout = ({ children, title = 'Patientcare', user }: Props) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const router = useRouter();

    const handleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'nav-link active' : 'nav-link';
    };

    const goBack = () => {
        router.back();
    };

    const renderLinks = () => {
        if (!user) {
            return (
                <>
                    <Link href="/"><a className={isActive('/')} >Connexion</a></Link>
                    <Link href="/contact"><a className={isActive('/contact')} >Contact</a></Link>
                </>
            );
        }

        return (
            <>
                <Link href={user.role === 'admin' ? "/users" : "/patients"}><a className={isActive(user.role === 'admin' ? "/users" : "/patients")} >{user.role === 'admin' ? "Utilisateurs" : "Patients"}</a></Link>
                {user.role === 'admin' && (
                    <Link href="/create-user"><a className={isActive('/create-user')} >Ajouter un Utilisateur</a></Link>
                )}
                {(user.role === 'nurse' || user.role === 'doctor') && (
                    <Link href="/create-patient"><a className={isActive('/create-patient')} >Ajouter un Patient</a></Link>
                )}
                <div className="dropdown">
                    <div className="dropbtn" onClick={handleProfileDropdown}>
                        <img src={`/images/profile/${user.sex}${user.role.toLowerCase()}.jpg`} alt="Profile"
                             style={{width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px'}}/>
                        {user.firstname} {user.lastname}
                    </div>
                    {showProfileDropdown && (
                        <div className="dropdown-content">
                            <Link href="/profile"><a className="nav-link">Voir le profile</a></Link>
                            <a className="nav-link" onClick={() => { sessionStorage.clear(); window.location.href = '/'; }}>Deconnexion</a>
                        </div>
                    )}
                </div>
            </>
        );
    };

    return  (
        <div className="layout-container">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header style={{width: '100%', background: '#f0f0f0', padding: '10px 0'}}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <Image src="/images/icon.png" alt="Company Logo" width={60} height={40} style={{
                        position: 'absolute',
                    }}/>
                    <nav style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        gap: '20px',
                        flex: 1
                    }}>
                        {renderLinks()}
                    </nav>
                </div>
            </header>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
            }}>
                {
                    (router.pathname !== '/signin' && router.pathname !== '/users' && router.pathname !== '/patients') && (
                        <button onClick={goBack} style={{
                            border: 'none',
                            background: 'transparent',
                            color: 'black',
                            cursor: 'pointer',
                            textUnderlineOffset: 'none'
                        }}>
                            <FaArrowCircleLeft/> Retour
                        </button>
                    )
                }
            </div>
            {
                user && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        minHeight: '100vh',
                    }}>
                        <SidebarComponent user={user}/>
                        <main style={{
                            "padding": "30px",
                        }}>
                            {children}
                        </main>
                    </div>
                )
            }
            {
                !user && (
                    <main style={{
                        "padding": "20px",
                    }}>
                        {children}
                    </main>
                )
            }

            <footer style={{position: 'fixed', bottom: 0, width: '100%', background: '#f0f0f0', padding: '10px 0'}}>
                <hr/>
                <span>© {new Date().getFullYear()} - Tous droits réservés à Patientcare</span>
            </footer>
            <style jsx global>{`
                .nav-link {
                    padding: 10px;
                    text-decoration: none;
                    color: #000;
                    transition: color 0.3s ease;
                }

                .nav-link:hover {
                    color: #007bff;
                }

                .active {
                    font-weight: bold;
                    color: #007bff;
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
            `}</style>
        </div>
    );
};

export default Layout;
