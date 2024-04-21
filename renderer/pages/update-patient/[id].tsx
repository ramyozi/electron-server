import {GetServerSideProps, NextPage} from "next";
import {Patient} from "../../interfaces";
import Layout from "../../components/Layout";
import {findData} from "../../utils/sample-api-patients";
import PatientUpdateContainer from "../../components/Forms/PatientUpdateContainer";


interface UpdatePatientPageProps {
    patient: Patient;
}

const UpdatePatientPage: NextPage<UpdatePatientPageProps> = ({ patient }) => {
    return (
        <Layout title={`Update ${patient.firstName} ${patient.lastName}`}>
            <PatientUpdateContainer patient={patient} />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const patient = await findData(params.id as string);
        return { props: { patient } };
    } catch (error) {
        return { notFound: true };
    }
};

export default UpdatePatientPage;

