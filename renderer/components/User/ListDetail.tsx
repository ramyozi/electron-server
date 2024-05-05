import * as React from 'react'

import { User } from '../../interfaces'
import {FaEdit, FaTrash} from "react-icons/fa";
import Link from "next/link";

type ListDetailProps = {
  item: User
}


const ListDetail = ({ item: user }: ListDetailProps) => {

    const handleUpdate = () => {
        console.log('Update user:', user.id);
    };

    const handleDelete = () => {
        console.log('Delete user:', user.id);
    };

    return (
        <div style={{
            padding: '20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            margin: '20px auto',
            maxWidth: '600px'
        }}>
            <h1 style={{color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px'}}>
                {user.firstname} {user.lastname}
            </h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Rôle:</strong> {user.role}</p>
            <p><strong>Status:</strong> {user.status}</p>
            <p><strong>Créé le:</strong> {user.created_at}</p>
            <p><strong>Mis à jour le:</strong> {user.updated_at}</p>

            <div style={{marginTop: '20px', textAlign: 'center'}}>
                <a href="#" onClick={handleUpdate}
                   style={{marginRight: '20px', color: '#007bff', textDecoration: 'none', cursor: 'pointer'}}><FaEdit
                    size={24}/></a>
                <a href="#" onClick={handleDelete}
                   style={{color: '#dc3545', textDecoration: 'none', cursor: 'pointer'}}><FaTrash size={24}/></a>
            </div>

            <Link href={`/users`}><a style={{display: 'block', textAlign: 'center', marginTop: '20px'}}>Retour à la page d'utilisateurs</a></Link>
        </div>


    );
};

export default ListDetail;
