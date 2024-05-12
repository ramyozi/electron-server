import React, { useState } from 'react';

const PatientSummary = ({
                            personalInfo,
                            drugAllergies,
                            chronicDiseases,
                            onSubmit,
                        }) => {
    const [expandedSections, setExpandedSections] = useState({
        personalInfo: true,
        drugAllergies: false,
        chronicDiseases: false,
    });

    const isSubmitDisabled = !personalInfo.lastName ||
        !personalInfo.firstName ||
        !personalInfo.dateOfBirth ||
        !personalInfo.placeOfBirth ||
        !personalInfo.address ||
        !personalInfo.sex ||
        !personalInfo.phoneNumber ||
        !personalInfo.socialSecurityNumber;

    const toggleSection = (section) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const renderSection = (title, content, sectionName) => {
        const isExpanded = expandedSections[sectionName];
        return (
            <div className="summary-section">
                <h3 onClick={() => toggleSection(sectionName)}>
                    {title} {isExpanded ? '▲' : '▼'}
                </h3>
                {isExpanded && <div>{content}</div>}
            </div>
        );
    };

    const renderDrugAllergiesTable = () => {
        return (
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Allergies Médicamenteuses</th>
                </tr>
                </thead>
                <tbody>
                {drugAllergies?.map((allergy, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{allergy}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    const renderChronicDiseasesTable = () => {
        return (
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Maladies Chroniques</th>
                </tr>
                </thead>
                <tbody>
                {chronicDiseases?.map((disease, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{disease}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="patient-summary-container">
            <h2>Récapitulatif du Patient</h2>
            {renderSection('Informations Personnelles', (
                <div>
                    <p>Nom: {personalInfo.lastName}</p>
                    <p>Prénom: {personalInfo.firstName}</p>
                    <p>Date de Naissance: {personalInfo.dateOfBirth}</p>
                    <p>Lieu de Naissance: {personalInfo.placeOfBirth}</p>
                    <p>Adresse: {personalInfo.address}</p>
                    <p>Sexe: {personalInfo.sex}</p>
                    <p>Numéro de Téléphone: {personalInfo.phoneNumber}</p>
                    <p>Numéro de Sécurité Sociale: {personalInfo.socialSecurityNumber}</p>
                </div>
            ), 'personalInfo')}
            <br/>
            { drugAllergies.length > 0 && renderSection('Allergies Médicamenteuses', renderDrugAllergiesTable(), 'drugAllergies') }
            <br/>

            { chronicDiseases.length > 0 && renderSection('Maladies Chroniques', renderChronicDiseasesTable(), 'chronicDiseases') }
            <br/>

            <button onClick={onSubmit} disabled={isSubmitDisabled}
            style={ isSubmitDisabled ? { backgroundColor: 'gray', cursor: 'not-allowed' , visibility: 'hidden'} : {backgroundColor: 'green', cursor: 'pointer'}

            }
            >Soumettre le Dossier</button>
        </div>
    );
};

export default PatientSummary;
