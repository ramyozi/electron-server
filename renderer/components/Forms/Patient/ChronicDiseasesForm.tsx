import React, { useState } from 'react';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(chronicDiseases);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="list-container" style={{ flexBasis: '50%' }}>
                <h2>Liste des Maladies Chroniques</h2>
                <ul>
                    {chronicDiseases.map((disease, index) => (
                        <li key={index}>
                            {disease}
                            <button onClick={() => handleDeleteDisease(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flexBasis: '50%' }}>
                <h2>Ajouter une Maladie Chronique</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter une maladie chronique"
                    />
                    <button type="button" onClick={handleAddDisease}>Ajouter</button>
                    <button type="submit" style={{ marginLeft: '10px' }}>Enregistrer Les Maladies</button>
                </form>
            </div>
        </div>
    );
};

export default ChronicDiseasesForm;
