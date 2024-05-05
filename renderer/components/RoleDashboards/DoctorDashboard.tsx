// components/RoleDashboards/DoctorDashboard.tsx
import Link from "next/link";

const DoctorDashboard = () => {
    const doctorButtonStyle = {
        backgroundColor: '#FF5722',
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        margin: '5px'
    };

    return (

        <div style={{ backgroundColor: '#dfefef', padding: '20px', borderRadius: '10px' }}>
            <h2>Doctor Dashboard</h2>
            <Link href="/scan-qr">
                <button style={doctorButtonStyle}>Scanner le code QR du patient</button>
            </Link>
            <Link href="/patients">
                <button style={doctorButtonStyle}>Voir la liste des patients</button>
            </Link>
        </div>
    );
};

export default DoctorDashboard;
