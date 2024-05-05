import React, { useState } from 'react';
import styles from '../../public/styles/CreateUserForm.module.css';

export type ChampsFormulaireUtilisateur = {
    prenom: string;
    nom: string;
    email: string;
    motDePasse: string;
    role: 'admin' | 'docteur' | 'infirmière';
    sex: string;
    statut: 'actif' | 'inactif';
};

type Props = {
    onSubmit: (utilisateur: ChampsFormulaireUtilisateur) => void;
};

const FormulaireCreationUtilisateur: React.FC<Props> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<ChampsFormulaireUtilisateur>({
        prenom: '',
        nom: '',
        email: '',
        motDePasse: '',
        role: 'admin',
        sex: '',
        statut: 'actif',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={styles.card}>
            <h1 className={styles.header}>Créer Utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={styles.formLabel}>Prénom:</label>
                    <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Nom:</label>
                    <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label className={styles.formLabel}>Rôle:</label>
                    <select name="role" value={formData.role} onChange={handleChange} required className={styles.select}>
                        <option value="admin">Admin</option>
                        <option value="docteur">Docteur</option>
                        <option value="infirmière">Infirmière</option>
                    </select>
                </div>
                <div>
                    <label className={styles.formLabel}>Sexe:</label>
                    <select name="sex" value={formData.sex} onChange={handleChange} required className={styles.select}>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </div>
                <div>
                    <label className={styles.formLabel}>Statut:</label>
                    <select name="statut" value={formData.statut} onChange={handleChange} required className={styles.select}>
                        <option value="actif">Actif</option>
                        <option value="inactif">Inactif</option>
                    </select>
                </div>
                <button type="submit" className={styles.button}>Créer</button>
            </form>
        </div>
    );
};

export default FormulaireCreationUtilisateur;
