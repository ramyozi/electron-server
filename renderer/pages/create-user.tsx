// pages/create-user.tsx
import React from 'react';
import Layout from '../components/Layout';
import CreateUserForm, {ChampsFormulaireUtilisateur} from '../components/Forms/CreateUserForm';
import {useRouter} from "next/router";

const CreateUserPage = () => {
    const router = useRouter();

    const handleCreateUser = (user: ChampsFormulaireUtilisateur) => {
        console.log('Creating user:', user);
        router.push('/users');
    };

    return (
        <Layout title="Create User | Admin Dashboard">

            <h1>Create User</h1>
            <CreateUserForm onSubmit={handleCreateUser} />
        </Layout>
    );
};

export default CreateUserPage;
