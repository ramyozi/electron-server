// components/Patient/PersonalInfoForm.tsx
import React, { useState, useEffect } from 'react';

export type PersonalInfoFormData = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    address: string;
    sex: string;
    phoneNumber: string;
    socialSecurityNumber: string;
};

type PersonalInfoFormProps = {
    onSubmit: (data: PersonalInfoFormData) => void;
    initialData: PersonalInfoFormData;
    handleFinalSubmit?: () => void;
};

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ onSubmit, initialData }) => {
    const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormData>(initialData);

    useEffect(() => {
        setPersonalInfo(initialData);  // Initialize form when data changes
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(personalInfo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Prénom:</label>
            <input type="text" name="firstName" value={personalInfo.firstName} onChange={handleChange} required />

            <label>Nom:</label>
            <input type="text" name="lastName" value={personalInfo.lastName} onChange={handleChange} required />

            <label>Date de naissance:</label>
            <input type="date" name="dateOfBirth" value={personalInfo.dateOfBirth} onChange={handleChange} required />

            <label>Lieu de naissance:</label>
            <input type="text" name="placeOfBirth" value={personalInfo.placeOfBirth} onChange={handleChange} required />

            <label>Adresse:</label>
            <input type="text" name="address" value={personalInfo.address} onChange={handleChange} required />

            <label>Sexe:</label>
            <select name="sex" value={personalInfo.sex} onChange={handleChange} required>
                <option value="M">Homme</option>
                <option value="F">Femme</option>
            </select>

            <label>Numéro de téléphone:</label>
            <input type="tel" name="phoneNumber" value={personalInfo.phoneNumber} onChange={handleChange} required />

            <label>Numéro de sécurité sociale:</label>
            <input type="text" name="socialSecurityNumber" value={personalInfo.socialSecurityNumber} onChange={handleChange} required />

            <button type="submit">Soumettre</button>
        </form>
    );
};

export default PersonalInfoForm;
