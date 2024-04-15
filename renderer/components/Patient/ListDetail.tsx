import React from 'react';
import Link from 'next/link';
import {Patient} from "../../interfaces";

type Props = {
    patient: Patient
}

const PatientListItem = ({ patient }: Props) => (
    <section className="patient-list-item">
        <div className="patient-list-item__header">
            <h2>{patient.lastName} {patient.firstName}</h2>
            <h3>{patient.phoneNumber}</h3>
            <h3>{patient.email}</h3>
            <h3>{patient.socialSecurityNumber}</h3>
            <p>{patient.dateOfBirth}</p>
        </div>
        <div className="patient-list-item__content">
            <p>{patient.postalAddress}</p>
        </div>
        <div className="patient-list-item__footer">
            <Link href={`/patient/${patient.idPatient}`}>
                <a>View Details</a>
            </Link>
        </div>
    </section>
);


export default PatientListItem;
