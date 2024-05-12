import PersonalInfoForm, {PersonalInfoFormData} from "./Patient/PersonalInfoForm";
import DrugAllergiesForm from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";
import ExamForm from "./Patient/ExamForm";
import {useRouter} from "next/router";
import {useState} from "react";
import AnalysisForm from "./Patient/analysisForm";
import {FaCheck, FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Analysis, Exam} from "../../interfaces";


const stepComponents = [
    { name: "Informations Personnelles", component: PersonalInfoForm },
    { name: "Allergies Médicamenteuses", component: DrugAllergiesForm },
    { name: "Maladies Chroniques", component: ChronicDiseasesForm },
    { name: "Examens", component: ExamForm },
    { name: "Analyses", component: AnalysisForm },
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
    const [exams, setExams] = useState<Exam[]>([]);
    const [analysis, setAnalysis] = useState<Analysis[]>([]);

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

    const handleExamsSubmit = (data: Exam[]) => {
        setExams(data);
        goNext();
    }

    const handleAnalysisSubmit = (data: Analysis[]) => {
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

    const handleFinalSubmit = () => {
        console.log('Submitting data', {
            personalInfo,
            drugAllergies,
            chronicDiseases,
            exams,
            analysis,
        });
        router.push('/patients');
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="menu" style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px', height: '100%' }}>
                {stepComponents.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-item ${index === currentStep ? 'active' : ''}`}
                        onClick={() => setCurrentStep(index)}
                        style={{ padding: '10px', cursor: 'pointer', color: index === currentStep ? 'blue' : 'black' }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="form-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {renderCurrentForm()}
                <div className="navigation-buttons" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
                    {currentStep > 0 && (
                        <button onClick={() => setCurrentStep(currentStep - 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black"  }}>
                            <FaChevronLeft /> Avant
                        </button>
                    )}
                    {currentStep < stepComponents.length - 1 && (
                        <button onClick={() => setCurrentStep(currentStep + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black" }}>
                            Après <FaChevronRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

};

export default PatientCreationContainer;
