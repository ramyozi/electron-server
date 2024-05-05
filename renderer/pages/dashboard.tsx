// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AdminDashboard from '../components/RoleDashboards/AdminDashboard';
import NurseDashboard from '../components/RoleDashboards/NurseDashboard';
import DoctorDashboard from '../components/RoleDashboards/DoctorDashboard';
import { User } from '../interfaces';
import {useUser} from "../context/UserContext";

const DashboardPage = () => {
    const { user } = useUser();
    const router = useRouter();
    console.error('user', user);

    useEffect(() => {
        if (!user) {
            router.push('/signin');
        }
    }, [user, router]);

    if (!user) {
        return null;
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <img src="/images/1.jpg" alt="Dashboard Image" style={{ width: '30%', marginRight: '20px' }} />
                {renderDashboard()}
            </div>
        </Layout>

    );
};

export default DashboardPage;
