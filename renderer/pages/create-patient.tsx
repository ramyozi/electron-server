import React from 'react';
import Layout from '../components/Layout';
import PatientCreationContainer from "../components/Forms/PatientCreationContainer";

const CreatePatientPage = () => {
    return (
        <Layout title="Créer un Nouveau Patient">
            <PatientCreationContainer />
        </Layout>
    );
};

export default CreatePatientPage;