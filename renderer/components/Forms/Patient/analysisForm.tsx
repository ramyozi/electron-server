import {useState} from "react";
import {Analysis} from "../../../interfaces";
import {FaPlus, FaTrash} from "react-icons/fa";
import Select from "react-select";
import topAnalyses from "../../../public/data/analysesTop100.json";



type AnalysisFormProps = {
    onSubmit: (analysis: Analysis[]) => void;
    initialData: Analysis[];
};

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onSubmit, initialData }) => {
    const [analysis, setAnalysis] = useState<Analysis[]>(initialData);
    const [selectedAnalysis, setSelectedAnalysis] = useState<{ label: string, value: string } | null>(null);
    const [customAnalysis, setCustomAnalysis] = useState("");


    const handleSelectChange = (selectedOption) => {
        if (selectedOption.value !== "Autre") {
            const newAnalysis = {
                idAnalysis: Math.random(),
                analysisType: selectedOption.label,
                files: [],
                createdAt: new Date()
            };
            setAnalysis(prev => [...prev, newAnalysis]);
            setSelectedAnalysis(null);
        } else {
            setSelectedAnalysis(selectedOption);
        }
    }

    const handleAddAnalysis = () => {
        if (selectedAnalysis) {
            const analysisName = selectedAnalysis.value === "Autre" && customAnalysis.trim() !== "" ? customAnalysis : selectedAnalysis.label;
            const newAnalysis = {
                idAnalysis: Math.random(),
                analysisType: analysisName,
                files: [],
                createdAt: new Date()
            };
            setAnalysis(prev => [...prev, newAnalysis]);
            setSelectedAnalysis(null);
            setCustomAnalysis("");
        }
    };

    const handleDeleteAnalysis = (idAnalysis: number) => {
        setAnalysis(analysis => analysis.filter(a => a.idAnalysis !== idAnalysis));
    };

    const handleFileChange = (files: FileList, an: Analysis) => {
        an.files.push(...Array.from(files));
        setAnalysis([...analysis]);
    };

    return (
        <div className="analysis-form-container">
            <label style={{ display: 'block', marginBottom: '10px' }}>Type d'analyse: </label>
            <Select
                options={topAnalyses}
                value={selectedAnalysis}
                onChange={handleSelectChange}
                placeholder="Sélectionner une analyse"
            />
            {selectedAnalysis && selectedAnalysis.value === "Autre" && (
                <div>
                    <input
                        type="text"
                        value={customAnalysis}
                        onChange={(e) => setCustomAnalysis(e.target.value)}
                        placeholder="Précisez le type d'analyse"
                    />
                    <FaPlus onClick={handleAddAnalysis} style={{ cursor: 'pointer' }} />
                </div>
            )}
            {analysis.map((an, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <span>
                        {an.analysisType} - {an.createdAt.toLocaleDateString()}
                    </span>
                    <div>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => e.target.files && handleFileChange(e.target.files, an)}
                        />
                        <FaTrash onClick={() => handleDeleteAnalysis(an.idAnalysis)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnalysisForm;
