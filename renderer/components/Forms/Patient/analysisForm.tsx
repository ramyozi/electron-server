import {useState} from "react";


type AnalysisFormProps = {
    onSubmit: (analysis: string[], files: File[]) => void;
    initialData: string[];
};

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onSubmit, initialData }) => {
    const [analysis, setAnalysis] = useState<string[]>(initialData);
    const [files, setFiles] = useState<File[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setAnalysis(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDelete = (index: number) => {
        setAnalysis(analysis => analysis.filter((_, i) => i !== index));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = e.target.files;
        if (fileList) {
            setFiles(Array.from(fileList));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(analysis, files);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="list-container" style={{ flexBasis: '50%' }}>
                <h2>Liste des Analyses</h2>
                <ul>
                    {analysis.map((analysis, index) => (
                        <li key={index}>
                            {analysis}
                            <button onClick={() => handleDelete(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flexBasis: '50%' }}>
                <h2>Ajouter une Analyse</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fileInput">Upload File:</label>
                    <input id="fileInput" type="file" onChange={handleFileChange} accept=".png,.pdf" multiple/>
                    <button type="submit" style={{marginLeft: '10px'}}>Enregistrer Les Analyses</button>
                </form>

            </div>
        </div>
    );
};

export default AnalysisForm;