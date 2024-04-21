import Link from "next/link";
import React from "react";

const DoctorDashboard = () => (
    <div>
        <h2>Doctor Dashboard</h2>
        <Link href="/scan-qr"><button>Scanner le code QR du patient</button></Link>
        <Link href="/patients"><button>Voir la liste des patients</button></Link>
    </div>
);

export default DoctorDashboard;