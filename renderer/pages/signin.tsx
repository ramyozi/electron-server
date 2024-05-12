import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { dataArray } from '../utils/sample-api-users';
import { useUser } from '../context/UserContext';
import Layout from '../components/Layout';
import styles from '../public/styles/SignInForm.module.css';
import { FiMail, FiLock } from 'react-icons/fi';
import Image from 'next/image';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useUser();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = dataArray.find(user => user.email === email && user.password === password);
        if (user) {
            login(user);
            switch (user.role) {
                case 'admin':
                    router.push('/users');
                    break;
                case 'nurse':
                    router.push('/patients');
                    break;
                case 'doctor':
                    router.push('/patients');
                    break;
                default:
                    setError('Role non reconnu');
            }

        } else {
            setError('Adresse e-mail ou mot de passe invalide');
        }
    };

    return (
        <Layout title="Connexion">
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image src="/images/logo.jpg" alt="Logo" width={250} height={250}/>
                </div>
                <h1 className={styles.title}>Connexion</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <FiMail className={styles.icon} size={20}/>
                        <input
                            type="email"
                            placeholder="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <FiLock className={styles.icon} size={20}/>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.input}
                        />
                    </div>

                    {error && <p className={styles.errorMessage}>{error}</p>}

                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>
            </div>
        </Layout>
    );
};

export default SignInPage;
