import React, { useState } from 'react';

export type DrugAllergyFormData = string[];

type DrugAllergiesFormProps = {
    onSubmit: (allergies: DrugAllergyFormData) => void;
    initialData: DrugAllergyFormData;
};

const DrugAllergiesForm: React.FC<DrugAllergiesFormProps> = ({ onSubmit, initialData }) => {
    const [allergies, setAllergies] = useState<string[]>(initialData);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setAllergies(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDelete = (index: number) => {
        setAllergies(allergies => allergies.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(allergies);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="list-container" style={{ flexBasis: '50%' }}>
                <h2>Liste des Allergies Médicamenteuses</h2>
                <ul>
                    {allergies.map((allergy, index) => (
                        <li key={index}>
                            {allergy}
                            <button onClick={() => handleDelete(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flexBasis: '50%' }}>
                <h2>Ajouter une Allergie</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une allergie médicamenteuse"
                    />
                    <button type="button" onClick={handleAdd}>Ajouter</button>
                    <button type="submit" style={{ marginLeft: '10px' }}>Enregistrer Les Allergies</button>
                </form>
            </div>
        </div>
    );
};

export default DrugAllergiesForm;
