import {Patient, User} from '../interfaces'

/** Dummy patient data. */
export const dataArray: Patient[] = [
  {
    idPatient: 101,
    lastName: 'Alice',
    firstName: 'Smith',
    dateOfBirth: '2021-09-01',
    postalAddress: '1234 Main St Anytown, USA',
    email: 'alicesmith@gmail.com',
    sex : 'F',
    phoneNumber: '+213 123456789',
    socialSecurityNumber: '123-45-6789'
  },
  {
    idPatient: 102,
    lastName: 'Bouzid',
    firstName: 'Fatima',
    dateOfBirth: '1995-03-12',
    postalAddress: '18 Rue des Oliviers, Alger',
    email: 'fatimabouzid@example.dz',
    sex : 'F',
    phoneNumber: '+213 555123456',
    socialSecurityNumber: '987-65-4321'
  },
  {
    idPatient: 103,
    lastName: 'Abdelkader',
    firstName: 'Ahmed',
    dateOfBirth: '1980-07-25',
    postalAddress: '32 Avenue Pasteur, Oran',
    email: 'ahmedabdelkader@example.dz',
    sex : 'M',
    phoneNumber: '+213 555234567',
    socialSecurityNumber: '654-32-1098'
  },
  {
    idPatient: 104,
    lastName: 'Djelloul',
    firstName: 'Nadia',
    dateOfBirth: '1990-11-03',
    postalAddress: '5 Rue des Roses, Tizi Ouzou',
    email: 'nadiadjelloul@example.dz',
    sex : 'F',
    phoneNumber: '+213 555345678',
    socialSecurityNumber: '321-09-8765'
  },
  {
    idPatient: 105,
    lastName: 'Belkacem',
    firstName: 'Youssef',
    dateOfBirth: '1978-05-20',
    postalAddress: '10 Boulevard Amirouche, Constantine',
    email: 'youssef.belkacem@example.dz',
    sex : 'M',
    phoneNumber: '+213 555456789',
    socialSecurityNumber: '876-54-3210'
  },
  {
    idPatient: 106,
    lastName: 'Khelifa',
    firstName: 'Amina',
    dateOfBirth: '2000-12-08',
    postalAddress: '22 Rue Ibn Khaldoun, Bejaia',
    email: 'amina.khelifa@example.dz',
    sex : 'F',
    phoneNumber: '+213 555567890',
    socialSecurityNumber: '543-21-0987'
  }
]

/**
 * Finds a patient by ID.
 * @param {string} id The patient ID to find.
 * @returns {Promise<Patient>} The found patient.
 */
export async function findData(id: string): Promise<Patient> {
  const selected = dataArray.find(patient => patient.idPatient === Number(id));
  if (!selected) {
    throw new Error('Cannot find user');
  }
  return selected;
}

/**
 * Returns all patients.
 * @returns {Promise<Patient[]>} Array of patients.
 */
export async function findAll(): Promise<Patient[]> {
  return dataArray;
}