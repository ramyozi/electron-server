import PersonalInfoForm, {PersonalInfoFormData} from "./Patient/PersonalInfoForm";
import DrugAllergiesForm from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";
import ExamForm from "./Patient/ExamForm";
import {useRouter} from "next/router";
import {useState} from "react";
import AnalysisForm from "./Patient/analysisForm";


const stepComponents = [
    { name: "Personal Information", component: PersonalInfoForm },
    { name: "Allergies Médicamenteuses", component: DrugAllergiesForm },
    { name: "Maladies Chroniques", component: ChronicDiseasesForm },
    { name: "Exams", component: ExamForm },
    { name: "Analysis", component: AnalysisForm },
    { name: "Récapitulatif", component: PatientSummary }
];

const PatientCreationContainer = () => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const initialPersonalInfo: PersonalInfoFormData = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        address: '',
        sex: 'M',
        phoneNumber: '',
        socialSecurityNumber: '',
    };

    const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormData>(initialPersonalInfo);
    const [drugAllergies, setDrugAllergies] = useState<string[]>([]);
    const [chronicDiseases, setChronicDiseases] = useState<string[]>([]);
    const [exams, setExams] = useState<string[]>([]);
    const [analysis, setAnalysis] = useState<string[]>([]);

    const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
        setPersonalInfo(data);
        // TODO: Save data to backend
        router.push('/patients');
    };

    const handleDrugAllergiesSubmit = (data: string[]) => {
        setDrugAllergies(data);
        goNext();
    }

     const handleChronicDiseasesSubmit = (data: string[]) => {
        setChronicDiseases(data);
        goNext();
     }

    const handleExamsSubmit = (data: string[]) => {
        setExams(data);
        goNext();
    }

    const handleAnalysisSubmit = (data: string[]) => {
        setAnalysis(data);
        goNext();
    }

    const goNext = () => {
        setCurrentStep(prev => (prev < stepComponents.length - 1 ? prev + 1 : prev));
    };

    const goPrevious = () => {
        setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));
    };

    const renderCurrentForm = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInfoForm initialData={personalInfo} onSubmit={handlePersonalInfoSubmit} />;
            case 1:
                return <DrugAllergiesForm initialData={drugAllergies} onSubmit={handleDrugAllergiesSubmit} />;
            case 2:
                return <ChronicDiseasesForm initialData={chronicDiseases} onSubmit={handleChronicDiseasesSubmit} />;
            case 3:
                return <ExamForm initialData={exams} onSubmit={handleExamsSubmit} />;
            case 4:
                return <AnalysisForm initialData={analysis} onSubmit={handleAnalysisSubmit} />;
            case 5:
                return <PatientSummary personalInfo={personalInfo} drugAllergies={drugAllergies}
                                       chronicDiseases={chronicDiseases} onSubmit={
                    () => {
                        router.push('/');
                    }
                } />;
            default:
                return null;
        }
    };

    return (
        <div className="patient-creation-container">
            <div className="menu">
                {stepComponents.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${index === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="form-container">
                {renderCurrentForm()}
                <div className="navigation-buttons">
                    {currentStep > 0 && <button onClick={goPrevious}>← Précédent</button>}
                    {currentStep < stepComponents.length - 1 && <button onClick={goNext}>Suivant →</button>}
                </div>
            </div>
        </div>
    );
};

export default PatientCreationContainer;
