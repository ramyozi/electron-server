import React from 'react';
import Link from 'next/link';
import {Patient} from "../../interfaces";
import {FaEdit, FaTrash} from "react-icons/fa";
import {useRouter} from "next/router";

type Props = {
    patient: Patient
}

const PatientListItem = ({ patient }: Props) => {
    const router = useRouter();
    const handleUpdate = () => {
        console.log('Update user:', patient.idPatient);
        router.push(`/update-patient/${patient.idPatient}`);
    };

    const handleDelete = () => {
        console.log('Delete user:', patient.idPatient);
    };

    return (
        <div style={{
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            margin: '20px auto',
            maxWidth: '600px',
            padding: '20px'
        }}>
            <h2 style={{color: '#333', fontSize: '24px', marginBottom: '5px'}}>
                {patient.lastName} {patient.firstName}
            </h2>
            <h3 style={{fontSize: '18px', color: '#666', marginBottom: '5px'}}>{patient.phoneNumber}</h3>
            <h3 style={{fontSize: '18px', color: '#666', marginBottom: '5px'}}>{patient.email}</h3>
            <h3 style={{fontSize: '18px', color: '#666', marginBottom: '5px'}}>{patient.socialSecurityNumber}</h3>
            <p>{patient.dateOfBirth}</p>

            <p style={{fontSize: '16px', color: '#666', marginTop: '20px'}}>{patient.postalAddress}</p>

            <div style={{marginTop: '20px', textAlign: 'center'}}>
                <a href="#" onClick={handleUpdate}
                   style={{marginRight: '20px', color: '#007bff', textDecoration: 'none', cursor: 'pointer'}}><FaEdit
                    size={24}/></a>
                <a href="#" onClick={handleDelete}
                   style={{color: '#dc3545', textDecoration: 'none', cursor: 'pointer'}}><FaTrash
                    size={24}/></a>
            </div>

            <Link href="/patients"><a style={{display: 'block', textAlign: 'center', marginTop: '20px'}}>Retour à la
                liste des patients</a></Link>
        </div>
    );

};


export default PatientListItem;
