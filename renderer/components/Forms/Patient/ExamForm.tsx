import {useState} from "react";

type ExamFormProps = {
    onSubmit: (exams: string[]) => void;
    initialData: string[];
};

const ExamForm: React.FC<ExamFormProps> = ({ onSubmit, initialData }) => {
    const [exams, setExams] = useState<string[]>(initialData);
    const [inputValue, setInputValue] = useState("");

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setExams(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleDelete = (index: number) => {
        setExams(exams => exams.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(exams);
    };

    return (
        <div className="list-form-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="list-container" style={{ flexBasis: '50%' }}>
                <h2>Liste des Examens</h2>
                <ul>
                    {exams.map((exam, index) => (
                        <li key={index}>
                            {exam}
                            <button onClick={() => handleDelete(index)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-container" style={{ flexBasis: '50%' }}>
                <h2>Ajouter un Examen</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ajouter un examen"
                    />
                    <button type="button" onClick={handleAdd}>Ajouter</button>
                    <button type="submit" style={{ marginLeft: '10px' }}>Enregistrer Les Examens</button>
                </form>
            </div>
        </div>
    );
};

export default ExamForm;
