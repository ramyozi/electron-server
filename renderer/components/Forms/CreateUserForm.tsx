import React, { useState } from 'react';

export type ChampsFormulaireUtilisateur = {
    prenom: string;
    nom: string;
    email: string;
    motDePasse: string;
    role: 'admin' | 'docteur' | 'infirmière';
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
        <form onSubmit={handleSubmit}>
            <div>
                <label>Prénom :</label>
                <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Nom :</label>
                <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email :</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Mot de passe :</label>
                <input
                    type="password"
                    name="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Rôle :</label>
                <select name="role" value={formData.role} onChange={handleChange} required>
                    <option value="admin">Admin</option>
                    <option value="docteur">Docteur</option>
                    <option value="infirmière">Infirmière</option>
                </select>
            </div>
            <div>
                <label>Statut :</label>
                <select name="statut" value={formData.statut} onChange={handleChange} required>
                    <option value="actif">Actif</option>
                    <option value="inactif">Inactif</option>
                </select>
            </div>
            <button type="submit">Créer Utilisateur</button>
        </form>
    );
};

export default FormulaireCreationUtilisateur;
