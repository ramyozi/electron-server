import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSave } from 'react-icons/fa';

type ChronicDiseasesFormProps = {
    onSubmit: (diseases: string[]) => void;
    initialData: string[];
};

const ChronicDiseasesForm: React.FC<ChronicDiseasesFormProps> = ({ onSubmit, initialData }) => {
    const [chronicDiseases, setChronicDiseases] = useState<string[]>(initialData);
    const [inputValue, setInputValue] = useState("");

    const handleAddDisease = () => {
        if (inputValue.trim() !== "") {
            setChronicDiseases(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDeleteDisease = (index: number) => {
        setChronicDiseases(chronicDiseases => chronicDiseases.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        onSubmit(chronicDiseases);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '20px' }}>
            <div className="list-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Liste des Maladies Chroniques</h2>
                <ul>
                    {chronicDiseases.map((disease, index) => (
                        <li key={index} style={{ margin: '10px 0' }}>
                            {disease}
                            <a onClick={() => handleDeleteDisease(index)} style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}>
                                <FaTrash />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flex: 1, backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <h2>Ajouter une Maladie Chronique</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une maladie chronique"
                        style={{ padding: '8px', margin: '10px 0', width: '100%' }}
                    />
                    <a onClick={handleAddDisease} style={{ cursor: 'pointer', color: 'green', marginRight: '10px' }}>
                        <FaPlus /> Ajouter
                    </a>
                    <a onClick={() => handleSubmit()} style={{ cursor: 'pointer', color: 'blue' }}>
                        <FaSave /> Enregistrer Les Maladies
                    </a>
                </form>
            </div>
        </div>
    );
};

export default ChronicDiseasesForm;
