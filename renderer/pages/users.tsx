import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import List from '../components/User/List';
import { User } from '../interfaces';
import { findAll } from '../utils/sample-api-users';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

type Props = {
    items: User[];
};

const WithInitialProps = ({ items }: Props) => {
    const { user } = useUser();
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    useEffect(() => {
        if (searchTerm) {
            const filtered = items.filter(
                (user) =>
                    user.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    user.lastname.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers([]);
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
            border: '1px solid #ccc',

        },
        listItem: {
            display: 'block',
            padding: '10px',
            textDecoration: 'none',
            color: 'black',
            backgroundColor: 'white',
            borderBottom: '1px solid #eee',
            transition: 'background-color 0.3s',
        },
        listItemHover: {
            backgroundColor: '#f0f0f0',
        },
    };

    return (
        <Layout title="Liste des utilisateurs" user={user}>
            <h1 style={
                {
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px'
                }
            }>Liste des utilisateurs</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Trouver un utilisateur par nom ou prénom..."
                style={styles.searchInput}
            />
            {searchTerm && (
                <div>
                    {filteredUsers.map((user) => (
                        <Link key={user.id} href={`/user/${user.id}`}>
                            <a style={styles.listItem}>
                                {user.firstname} {user.lastname}
                            </a>
                        </Link>
                    ))}
                </div>
            )}
            <List users={items}/>
        </Layout>
    );
};

export async function getStaticProps() {
    const items: User[] = await findAll();

    return { props: { items } };
}

export default WithInitialProps;
