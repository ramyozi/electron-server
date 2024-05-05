
import Link from 'next/link';

const NurseDashboard = () => {
    const nurseButtonStyle = {
        backgroundColor: '#2196F3',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer' as 'pointer',
        transition: 'background-color 0.3s, transform 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        margin: '10px',
        fontWeight: 'bold' as 'bold',
        textTransform: 'uppercase' as 'uppercase',
        letterSpacing: '1px',
        background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
    };

    const nurseButtonHoverStyle = {
        ...nurseButtonStyle,
        backgroundColor: '#21CBF3',
        transform: 'scale(1.05)'
    };

    return (
        <div style={{
            backgroundColor: '#E3F2FD',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center' as 'center'
        }}>
            <h2>Tableau de Bord de l'Infirmière</h2>
            <Link href="/scan-qr">
                <button style={nurseButtonStyle}>Scanner le code QR du patient</button>
            </Link>
            <Link href="/patients">
                <button style={nurseButtonStyle}>Voir la liste des patients</button>
            </Link>
            <Link href="/create-patient">
                <button style={nurseButtonStyle}>Ajouter un nouveau patient</button>
            </Link>
        </div>
    );
};

export default NurseDashboard;
