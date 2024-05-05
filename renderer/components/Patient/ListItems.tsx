import React from 'react'
import Link from 'next/link'

import {Patient, User} from '../../interfaces'

type Props = {
    patient: Patient
}

const styles = {
    td: {
        padding: '10px',
        border: '1px solid #ddd',
    },
    link: {
        color: '#065ea2',
        textDecoration: 'none'
    }
};

const PatientListItem = ({ patient }: Props) => (
    <tr>
        <td style={styles.td}>{patient.idPatient}</td>
        <td style={styles.td}>{patient.lastName}</td>
        <td style={styles.td}>{patient.firstName}</td>
        <td style={styles.td}>{patient.dateOfBirth}</td>
        <td style={styles.td}>{patient.postalAddress}</td>
        <td style={styles.td}>{patient.sex}</td>
        <td style={styles.td}>{patient.phoneNumber}</td>
        <td style={styles.td}>{patient.email}</td>
        <td style={styles.td}>{patient.socialSecurityNumber}</td>
        <td style={styles.td}>
            <Link href={`/patient/${patient.idPatient}`}>
                <a style={styles.link}>Accéder au dossier</a>
            </Link>
        </td>
    </tr>
);


export default PatientListItem;