import React, { useState, useEffect } from 'react';
import bodyPartsData from '../../../public/data/chronicDiseases.json';
import BodyDiagram from "../../UI/body/body-diagram";
import Select from "react-select";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

type ChronicDiseasesFormProps = {
    onSubmit: (diseases: string[]) => void;
    initialData: string[];
};

const ChronicDiseasesForm = ({ onSubmit, initialData }: ChronicDiseasesFormProps) => {
    const [selectedPart, setSelectedPart] = useState(null);
    const [diseases, setDiseases] = useState(initialData);
    const [options, setOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const part = bodyPartsData.bodyParts.find(part => part.id === selectedPart);
        setOptions(part ? part.diseases.map(disease => ({ value: disease, label: disease })) : []);
        setShowDropdown(!!selectedPart);
    }, [selectedPart]);

    const handlePartClick = (partId) => {
        setSelectedPart(selectedPart === partId ? null : partId);
    };

    const handleChange = (selectedOption) => {
        setDiseases([...diseases, selectedOption.value]);
        setSelectedPart(null);
    };

    const handleRemoveDisease = (disease) => {
        setDiseases(diseases.filter(d => d !== disease));
    };

    return (
        <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
            <div style={{width: '50%'}}>
                <h1>Sélectionnez une partie du corps</h1>
                <p data-tip="Cliquez sur une partie du corps pour voir les maladies associées">Aide: Passez la souris
                    ici !</p>
                <BodyDiagram onClick={handlePartClick} selectedPart={selectedPart}/>
            </div>
            <div style={{width: '50%', position: 'relative'}}>
                {showDropdown && (
                    <div style={{position: 'absolute', left: 100, top: -200}}>
                        <Select
                            options={options}
                            onChange={handleChange}
                            placeholder="Sélectionner une maladie"
                            autoFocus={true}
                            styles={
                                {
                                    control: (styles) => ({...styles, width: 300}),
                                    menu: (styles) => ({...styles, width: 300}),
                                }
                            }
                        />
                    </div>
                )}
                <h2>La liste des maladies chroniques</h2>
                <ul>
                    {diseases.map((disease, index) => (
                        <li key={index}>
                            {disease}
                            <AiOutlineMinusCircle onClick={() => handleRemoveDisease(disease)}
                                                  style={{cursor: 'pointer', color: 'red', marginLeft: '10px'}}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ChronicDiseasesForm;
