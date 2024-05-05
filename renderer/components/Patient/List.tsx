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
            margin: '20px 0'
        },
        th: {
            backgroundColor: '#f2f2f2',
            color: '#333',
            padding: '10px 15px',
            border: '1px solid #ddd',
            textAlign: 'left' as 'left'
        }
    };

    return (
        <>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Last Name</th>
                    <th style={styles.th}>First Name</th>
                    <th style={styles.th}>Date of Birth</th>
                    <th style={styles.th}>Address</th>
                    <th style={styles.th}>Sex</th>
                    <th style={styles.th}>Phone Number</th>
                    <th style={styles.th}>Email</th>
                    <th style={styles.th}>Social Security Number</th>
                    <th style={styles.th}>Details</th>
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
