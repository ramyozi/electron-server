import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { User } from '../interfaces';

const ProfilePage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        password: '',
    });

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            const currentUser = JSON.parse(storedUser);
            setUser(currentUser);
            setFormData({
                firstname: currentUser.firstname,
                lastname: currentUser.lastname,
                email: currentUser.email,
                role: currentUser.role,
                password: '',
            });
        }
    }, []);

    const handleEditToggle = () => {
        setEditing(!editing);
        if (!editing && user) {
            // Reset form data when closing edit mode
            setFormData({
                firstname: user?.firstname || '',
                lastname: user?.lastname || '',
                email: user?.email || '',
                role: user?.role,
                password: '',
            });
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSaveChanges = (e: React.FormEvent) => {
        e.preventDefault();
        if (user) {
            const updatedUser = { ...user, ...formData };
            setUser(updatedUser);
            console.log('Updated user:', updatedUser);
            sessionStorage.setItem('user', JSON.stringify(updatedUser));
            handleEditToggle();
        }
    };

    return (
        <Layout title="Profil | Next.js + TypeScript + Electron Example" user={user}>
            <h1>Profil</h1>
            {!editing ? (
                <>
                    <p>Prénom: {user?.firstname}</p>
                    <p>Nom: {user?.lastname}</p>
                    <p>Email: {user?.email}</p>
                    <p>Rôle: {user?.role}</p>
                    <button onClick={handleEditToggle}>Modifier le profil</button>
                </>
            ) : (
                <form onSubmit={handleSaveChanges}>
                    <label>
                        Prénom:
                        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange}
                               required/>
                    </label>
                    <label>
                        Nom:
                        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                    </label>
                    <label>
                        Mot de passe (laisser vide pour ne pas changer):
                        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    </label>
                    <label>
                        Rôle:
                        <input type="text" name="lastname" value={formData.role} onChange={handleChange} disabled/>
                    </label>
                    <button type="submit">Sauvegarder les modifications</button>
                    <button type="button" onClick={handleEditToggle}>Annuler</button>
                </form>
            )}
        </Layout>
    );
};

export default ProfilePage;
