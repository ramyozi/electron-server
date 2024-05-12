import React, {useState} from 'react'
import ListItems from './ListItems'
import {Patient, User} from '../../interfaces'
import PatientDetails from "./ListDetail";
import PatientListItem from "./ListItems";
import PaginationControls from "../../utils/pagination-controls";

type Props = {
    patients: Patient[]
}


const styles = {
    table: {
        width: '100%',
    },
    th: {
        backgroundColor: '#f2f2f2',
        color: '#333',
        padding: '10px',
        border: '1px solid #ddd'
    }
};


const Patients = ({ patients }: Props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const patientsPerPage = 10;
    const totalPages = Math.ceil(patients.length / patientsPerPage);

    const indexOfLastPatient = currentPage * patientsPerPage;
    const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
    const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const styles = {
        table: {
            width: '100%',
            borderCollapse: 'collapse' as 'collapse',
            overflowX: 'auto' as 'auto',
            tableLayout: 'fixed' as 'fixed'
        },
        th: {
            backgroundColor: '#f2f2f2',
            color: '#333',
            padding: '12px 15px',
            border: '1px solid #e0e0e0',
            fontSize: '14px',
            textAlign: 'left' as 'left',
            whiteSpace: 'nowrap',
        }
    };

    return (
        <>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>Identifiant</th>
                    <th style={styles.th}>Nom</th>
                    <th style={styles.th}>Prénom</th>
                    <th style={styles.th}>Date de naissance</th>
                    <th style={styles.th}>Adresse</th>
                    <th style={styles.th}>Sexe</th>
                    <th style={styles.th}>Numéro de téléphone</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Numéro de sécurité sociale</th>
                    <th style={styles.th}></th>
                </tr>
                </thead>
                <tbody>
                {currentPatients.map((patient) => (
                    <PatientListItem key={patient.idPatient} patient={patient} />
                ))}
                </tbody>
            </table>
            <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
};

export default Patients;
