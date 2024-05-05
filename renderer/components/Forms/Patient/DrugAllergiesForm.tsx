import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';

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

    const handleSubmit = () => {
        onSubmit(allergies);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px',  gap: '20px' }}>
            <div className="list-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Liste des Allergies Médicamenteuses</h2>
                <ul>
                    {allergies.map((allergy, index) => (
                        <li key={index} style={{ margin: '10px 0' }}>
                            {allergy}
                            <a onClick={() => handleDelete(index)} style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}>
                                <FaTrash />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Ajouter une Allergie</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une allergie médicamenteuse"
                        style={{ padding: '8px', margin: '10px 0', width: '100%' }}
                    />
                    <a onClick={handleAdd} style={{ cursor: 'pointer', color: 'green', marginRight: '10px' }}>
                        <FaPlus /> Ajouter
                    </a>
                    <a onClick={() => handleSubmit()} style={{ cursor: 'pointer', color: 'blue' }}>
                        <FaSave /> Enregistrer Les Allergies
                    </a>
                </form>
            </div>
        </div>
    );
};

export default DrugAllergiesForm;
