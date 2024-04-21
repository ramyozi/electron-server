// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IpcRenderer } from 'electron'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer
    }
  }
}

export type User = {
  id:number;
  firstname: string
  lastname: string
  email: string
  password: string
  role: string
  status: string
  created_at: string
  updated_at: string
}

export type Patient = {
  idPatient: number;
  lastName: string;
  firstName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  postalAddress: string;
  sex: string;
  phoneNumber: string;
  email: string;
  socialSecurityNumber: string;
};

export type MedicalIdentity = {
  idPatient: number;
  weight: number;
  height: number;
  bloodType: string;
  drugAllergies: string[];
  chronicDiseases: string[];
  bloodSugarLevel: number;
  bloodPressure: string;
};

export type RadiologicalExam = {
  idPatient: number;
  exams: Exam[];
};

export type Exam = {
  idExam: number;
  type: string;
  file: string;
  createdAt: Date;
};

export type MedicalAnalysis = {
  idPatient: number;
  analyses: Analysis[];
};

export type Analysis = {
  idAnalysis: number;
  analysisType: string;
  file: string;
  createdAt: Date;
};

