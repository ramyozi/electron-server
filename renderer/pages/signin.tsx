import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { dataArray } from '../utils/sample-api-users';
import { useUser } from '../context/UserContext';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../public/styles/SignInForm.module.css';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login } = useUser();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = dataArray.find(user => user.email === email && user.password === password);
        if (user) {
            login(user);
            router.push('/dashboard');
        } else {
            setError('Adresse e-mail ou mot de passe invalide');
        }
    };

    return (
        <Layout title="Connexion">
            <div className={styles.container}>
                <h1 className={styles.title}>Connexion</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className={styles.button}>Se connecter</button>
                </form>
            </div>
        </Layout>
    );
};

export default SignInPage;
