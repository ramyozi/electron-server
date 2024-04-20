// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AdminDashboard from '../components/RoleDashboards/AdminDashboard';
import NurseDashboard from '../components/RoleDashboards/NurseDashboard';
import DoctorDashboard from '../components/RoleDashboards/DoctorDashboard';
import { User } from '../interfaces';

const DashboardPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Get the stored user data from sessionStorage
        const storedUser = sessionStorage.getItem('user');
        if (!storedUser) {
            router.push('/signin'); // Redirect to sign-in if user data is not found
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [router]);

    if (!user) {
        return null; // or a loading spinner
    }

    const renderDashboard = () => {
        switch (user.role) {
            case 'admin':
                console.log('admin');
                return <AdminDashboard />;
            case 'nurse':
                console.log('nurse');
                return <NurseDashboard />;
            case 'doctor':
                console.log('doctor');
                return <DoctorDashboard />;
            default:
                return <p>Role not recognized.</p>;
        }
    };

    return (
        <Layout title="Patientcare" user={user}>
        {renderDashboard()}
        </Layout>
    );
};

export default DashboardPage;
