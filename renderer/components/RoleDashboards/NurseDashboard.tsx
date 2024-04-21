import Link from 'next/link';
import React from 'react';

const NurseDashboard = () => (
    <div>
            <h2>Tableau de Bord de l'Infirmière</h2>
            <Link href="/scan-qr"><button>Scanner le code QR du patient</button></Link>
            <Link href="/patients"><button>Voir la liste des patients</button></Link>
            <Link href="/create-patient"><button>Ajouter un nouveau patient</button></Link>
    </div>
);

export default NurseDashboard;