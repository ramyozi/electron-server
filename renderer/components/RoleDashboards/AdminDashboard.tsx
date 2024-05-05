import Link from 'next/link';

const AdminDashboard = () => {
    const adminButtonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease-in-out',
        margin: '10px'
    };

    return (
        <div style={{ backgroundColor: '#E8F5E9', padding: '20px', borderRadius: '10px' }}>
            <h2>Admin Dashboard</h2>
            <Link href="/users">
                <button style={adminButtonStyle}>User List</button>
            </Link>
            <Link href="/create-user">
                <button style={adminButtonStyle}>Create User</button>
            </Link>
        </div>
    );
};

export default AdminDashboard;
