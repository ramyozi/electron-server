import React from 'react'
import ListItems from './ListItems'
import {Patient, User} from '../../interfaces'
import PatientDetails from "./ListDetail";
import PatientListItem from "./ListItems";

type Props = {
    patients: Patient[]
}

const Patients = ({ patients }: Props) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Sex</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Social Security Number</th>
            <th>Details</th>
        </tr>
        </thead>
        <tbody>
        {patients.map((patient) => (
            <PatientListItem key={patient.idPatient} patient={patient}/>
        ))}
        </tbody>
    </table>
);

export default Patients;
