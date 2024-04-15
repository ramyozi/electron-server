import React from 'react'
import Link from 'next/link'

import {Patient, User} from '../../interfaces'

type Props = {
    patient: Patient
}

const PatientListItem = ({ patient }: Props) => (
    <tr>
        <td>{patient.idPatient}</td>
        <td>{patient.lastName}</td>
        <td>{patient.firstName}</td>
        <td>{patient.dateOfBirth}</td>
        <td>{patient.postalAddress}</td>
        <td>{patient.sex}</td>
        <td>{patient.phoneNumber}</td>
        <td>{patient.email}</td>
        <td>{patient.socialSecurityNumber}</td>
        <td>
            <Link href={`/patient/${patient.idPatient}`}>
                <a>View Details</a>
            </Link>
        </td>
    </tr>
);

export default PatientListItem;