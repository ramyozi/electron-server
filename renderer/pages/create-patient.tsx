import React from 'react';
import Layout from '../components/Layout';
import PatientCreationContainer from "../components/Forms/PatientCreationContainer";
import {useUser} from "../context/UserContext";

const CreatePatientPage = () => {
    const { user } = useUser();

    return (
        <Layout title="Créer un Nouveau Patient" user={user}>
            <PatientCreationContainer />
        </Layout>
    );
};

export default CreatePatientPage;