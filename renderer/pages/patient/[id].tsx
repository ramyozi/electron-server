// import { NextPageContext } from 'next'
import Layout from '../../components/Layout'
import {Analysis, Patient, User} from '../../interfaces'
import { findAll, findData } from '../../utils/sample-api-patients'
import ListDetail from '../../components/Patient/ListDetail'
import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Link from "next/link";
import {useUser} from "../../context/UserContext";

type Props = {
    patient: Patient;
};

const PatientDetailPage: NextPage<Props> = ({ patient }) => {
    const {user} = useUser();
    return (
        <Layout title={`${patient.firstName} ${patient.lastName}`} user={user}>
            <ListDetail patient={patient} />
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const patients = await findAll();
    const paths = patients.map((patient) => `/patient/${patient.idPatient}`);
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const patient = await findData(params.id as string);
        return { props: { patient } };
    } catch (error) {
        return { props: { errors: error.message } };
    }
};

export default PatientDetailPage;
