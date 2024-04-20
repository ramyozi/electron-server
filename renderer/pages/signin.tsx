// pages/signin.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { dataArray } from '../utils/sample-api-users'; // Adjust the path as needed

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Find user by email
        const user = dataArray.find(user => user.email === email);
        if (user && user.password === password) { // In a real app, you'd hash and check the password
            // User is found and password matches
            // Store user details in sessionStorage for this example (not for production use)
            sessionStorage.setItem('user', JSON.stringify(user));
            router.push('/dashboard'); // Redirect to the dashboard page
        } else {
            alert('Invalid email or password');
        }
    };

    return (
        <Layout title="Sign In | Next.js + TypeScript + Electron Example">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </Layout>
    );
};

export default SignInPage;
