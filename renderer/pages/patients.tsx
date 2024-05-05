import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import List from '../components/Patient/List'
import { Patient, User } from '../interfaces'
import { findAll } from '../utils/sample-api-patients'
import { useEffect, useState } from "react";
import {useUser} from "../context/UserContext";

type Props = {
    items: Patient[]
}

const WithInitialProps = ({ items }: Props) => {

    const { user } = useUser();
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

    const styles = {
        searchInput: {
            width: '40%',
            padding: '10px',
            margin: '10px 0',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc'
        },
        dropdownItem: {
            display: 'block',
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'white',
            borderBottom: '1px solid #eee',
            transition: 'background-color 0.3s',
        },
        dropdownItemHover: {
            backgroundColor: '#f0f0f0'
        }
    };

    return (
        <Layout title="Liste des patients" user={user}>
            <h1>Liste des Patients</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Rechercher par nom ou prénom..."
                style={styles.searchInput}
            />
            {searchTerm && (
                <div>
                    {filteredPatients.map(patient => (
                        <Link key={patient.idPatient} href={`/patient/${patient.idPatient}`}>
                            <a style={styles.dropdownItem}>{patient.firstName} {patient.lastName}</a>
                        </Link>
                    ))}
                </div>
            )}
            <List patients={items} />
        </Layout>
    );
};

export async function getStaticProps() {
    const items: Patient[] = await findAll();
    return { props: { items } };
}

export default WithInitialProps;
