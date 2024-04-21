// components/Dashboards/AdminDashboard.tsx
import Link from 'next/link';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Link href="/users">
                <button>User List</button>
            </Link>
            <Link href="/create-user">
                <button>Create User</button>
            </Link>

        </div>
    );
};

export default AdminDashboard;
