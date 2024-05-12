import React, { useState, useEffect } from 'react';
import bodyPartsData from '../../../public/data/chronicDiseases.json';
import Image from "next/image";

type ChronicDiseasesFormProps = {
    onSubmit: (diseases: string[]) => void;
    initialData: string[];
};

const ChronicDiseasesForm: React.FC<ChronicDiseasesFormProps> = ({ onSubmit, initialData }) => {
    const [selectedPart, setSelectedPart] = useState('');
    const [selectedDisease, setSelectedDisease] = useState('');
    const [diseases, setDiseases] = useState<string[]>(initialData);
    const [availableDiseases, setAvailableDiseases] = useState<string[]>([]);

    useEffect(() => {
        if (selectedPart) {
            const part = bodyPartsData.bodyParts.find(part => part.id === selectedPart);
            setAvailableDiseases(part ? part.diseases : []);
        }
    }, [selectedPart]);

    const handleBodyPartClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const partId = (event.target as SVGPathElement).id;
        setSelectedPart(partId);
    };

    const handleDiseaseSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDisease(event.target.value);
    };

    const handleAddDisease = () => {
        if (selectedDisease && !diseases.includes(selectedDisease)) {
            setDiseases([...diseases, selectedDisease]);
            setSelectedDisease('');
        }
    };

    const handleRemoveDisease = (disease: string) => {
        setDiseases(diseases.filter(d => d !== disease));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(diseases);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ margin: '20px' }}>
                <Image src="/public/SVGs/body.svg" alt="body" layout={"fill"} />
            </div>
            <div>
                <label htmlFor="diseases">Select Disease:</label>
                <select id="diseases" value={selectedDisease} onChange={handleDiseaseSelect} disabled={!selectedPart}>
                    <option value="">Select a Disease</option>
                    {availableDiseases.map(disease => (
                        <option key={disease} value={disease}>{disease}</option>
                    ))}
                </select>
                <button type="button" onClick={handleAddDisease} disabled={!selectedDisease}>Add Disease</button>
            </div>
            <ul>
                {diseases.map((disease, index) => (
                    <li key={index}>{disease} <button onClick={() => handleRemoveDisease(disease)}>Remove</button></li>
                ))}
            </ul>
            <button type="submit">Submit Diseases</button>
        </form>
    );
};

export default ChronicDiseasesForm;
