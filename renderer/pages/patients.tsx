import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/Patient/List'
import {Patient, User} from '../interfaces'
import { findAll } from '../utils/sample-api-patients'
import {useEffect, useState} from "react";

type Props = {
    items: Patient[]
    user: User;
}

const WithInitialProps = ({ items , user}: Props) => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = items.filter(patient =>
                patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPatients(filtered);
        } else {
            setFilteredPatients([]);
        }
    }, [searchTerm, items]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Layout title="Liste des patients" user={user}>
            <h1>Liste des Patients</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Rechercher par nom ou prénom..."
                className="search-input"
            />
            {searchTerm && (
                <div className="patient-dropdown">
                    {filteredPatients.map(patient => (
                        <Link key={patient.idPatient} href={`/patient/${patient.idPatient}`}>
                            <a className="dropdown-item">{patient.firstName} {patient.lastName}</a>
                        </Link>
                    ))}
                </div>
            )}
            <List patients={items} />
            <p>
                <Link href="/dashboard">
                    <a>Retour à l'accueil</a>
                </Link>
            </p>
        </Layout>
    );
};

export async function getStaticProps() {
    const items: Patient[] = await findAll();
    return { props: { items } };
}

export default WithInitialProps;
