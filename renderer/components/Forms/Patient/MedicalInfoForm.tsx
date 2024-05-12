import {useEffect, useState} from "react";
import {MedicalIdentity} from "../../../interfaces";
import {bloodTypeOptions, lifestyleOptions, riskFactorOptions} from "../../../public/data/MedicalInfoData";
import Select from "react-select";

export type MedicalInfoFormData = {
    weight: number;
    height: number;
    lifestyle: string[];
    riskFactors: string[];
    bloodType: string;
    bloodSugarLevel: number;
    bloodPressure: string;
};


interface MedicalInfoFormProps {
    initialData: MedicalInfoFormData;
    onSubmit: (data: MedicalInfoFormData) => void;
}

const MedicalInfoForm: React.FC<MedicalInfoFormProps> = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState<MedicalInfoFormData>(initialData);

    const handleInputChange = (field: keyof MedicalInfoFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    console.error('formData', formData);



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Informations médicales</h2>
            <div>
                <label>Groupe sanguin:</label>
                <Select
                    options={bloodTypeOptions}
                    value={formData.bloodType ? bloodTypeOptions.find(option => option.value === formData.bloodType) : null}
                    onChange={(option) => handleInputChange('bloodType', option?.value)}
                    placeholder="Sélectionner le groupe sanguin"
                />
            </div>
            <div>
                <label>Mode de vie:</label>
                <Select
                    options={lifestyleOptions}
                    isMulti
                    value={formData.lifestyle?.length > 0 ? lifestyleOptions.filter(option => formData.lifestyle.includes(option.value)) : null}
                    onChange={(options) => handleInputChange('lifestyle', options.map(option => option.value))}
                    placeholder="Choisir les habitudes de vie"
                />
            </div>
            <div>
                <label>Facteurs de risque:</label>
                <Select
                    options={riskFactorOptions}
                    isMulti
                    value={formData.riskFactors?.length > 0 ? riskFactorOptions.filter(option => formData.riskFactors.includes(option.value)) : null}
                    onChange={(options) => handleInputChange('riskFactors', options.map(option => option.value))}
                    placeholder="Sélectionner les facteurs de risque"
                />
            </div>
            <div>
                <label>Poids (kg):</label>
                <input
                    type="number"
                    value={formData.weight ?? ''}
                    onChange={e => handleInputChange('weight', Number(e.target.value))}
                    placeholder="Poids en kg"
                    min={0}
                />
            </div>
            <div>
                <label>Hauteur (cm):</label>
                <input
                    type="number"
                    value={formData.height ?? ''}
                    onChange={e => handleInputChange('height', Number(e.target.value))}
                    placeholder="Hauteur en cm"
                    min={0}
                />
            </div>
            <button type="submit">Soumettre</button>
        </form>
    );
};

export default MedicalInfoForm;
