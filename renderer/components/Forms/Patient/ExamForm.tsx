import {useState} from "react";
import Select from "react-select";
import topExams from "../../../public/data/examsTop100.json";
import {FaPlus, FaTrash, FaUpload} from "react-icons/fa";
import {Exam} from "../../../interfaces";


const ExamForm = ({ onSubmit, initialData }) => {
    const [exams, setExams] = useState<Exam[]>(initialData);
    const [selectedExam, setSelectedExam] = useState(null);
    const [customExam, setCustomExam] = useState("");

    const handleSelectChange = (selectedOption) => {
        if (selectedOption.value !== "Autre") {
            const newExam = {
                idExam: Math.random(),
                type: selectedOption.label,
                files: [],
                createdAt: new Date()
            };
            setExams(prev => [...prev, newExam]);
            setSelectedExam(null);
        } else {
            setSelectedExam(selectedOption);
        }
    };

    const handleAddCustomExam = () => {
        if (customExam.trim() !== "") {
            const newExam = {
                idExam: Math.random(),
                type: customExam,
                files: [],
                createdAt: new Date()
            };
            setExams(prev => [...prev, newExam]);
            setCustomExam("");
            setSelectedExam(null);
        }
    };

    const handleDeleteExam = (idExam) => {
        setExams(exams => exams.filter(exam => exam.idExam !== idExam));
    };

    const handleFileChange = (files, exam) => {
        exam.files.push(...files);
        setExams([...exams]); // Update to trigger re-render
    };

    return (
        <div className="exam-form-container">
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Le type d'examen: </label>
                <Select
                    options={topExams}
                    value={selectedExam}
                    onChange={handleSelectChange}
                    placeholder="Selectionner un examen"
                />
                {selectedExam && selectedExam.value === "Autre" && (
                    <div>
                        <input
                            type="text"
                            value={customExam}
                            onChange={(e) => setCustomExam(e.target.value)}
                            placeholder="Specifiez le nom de l'examen"
                        />
                        <FaPlus onClick={handleAddCustomExam} style={{ cursor: 'pointer' }} />
                    </div>
                )}
            </div>
            {exams.map((exam, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                        {exam.type} - {exam.createdAt.toLocaleDateString()}
                        <FaTrash onClick={() => handleDeleteExam(exam.idExam)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
                    </div>

                    {exam.files.map((file, fileIndex) => (
                        <span key={fileIndex} style={{ marginRight: '10px' }}>{file.name}</span>
                    ))}
                    <div>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => e.target.files && handleFileChange(Array.from(e.target.files), exam)}
                            style={{ display: 'block', marginBottom: '5px' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExamForm;
