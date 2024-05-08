import {Analysis, Exam, Patient} from "../../interfaces";
import {useRouter} from "next/router";
import {useState} from "react";
import PersonalInfoForm, {PersonalInfoFormData} from "./Patient/PersonalInfoForm";
import DrugAllergiesForm, {DrugAllergyFormData} from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";
import ExamForm from "./Patient/ExamForm";
import AnalysisForm from "./Patient/analysisForm";
import {FaCheck, FaChevronLeft, FaChevronRight} from "react-icons/fa";

const stepComponents = [
    { name: "Personal Information", component: PersonalInfoForm },
    { name: "Allergies Médicamenteuses", component: DrugAllergiesForm },
    { name: "Maladies Chroniques", component: ChronicDiseasesForm },
    { name: "Exams", component: ExamForm },
    { name: "Analysis", component: AnalysisForm },
    { name: "Récapitulatif", component: PatientSummary }
];

interface PatientUpdateContainerProps {
    patient: Patient;
}

const PatientUpdateContainer: React.FC<PatientUpdateContainerProps> = ({ patient }) => {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const [personalInfo, setPersonalInfo] = useState<PersonalInfoFormData>({
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth: patient.dateOfBirth,
        placeOfBirth: patient.placeOfBirth,
        address: patient.postalAddress,
        sex: patient.sex,
        phoneNumber: patient.phoneNumber,
        socialSecurityNumber: patient.socialSecurityNumber,
    });


    const [drugAllergies, setDrugAllergies] = useState<string[]>([]);
    const [chronicDiseases, setChronicDiseases] = useState<string[]>([]);
    const [exams, setExams] = useState<Exam[]>([]);
    const [analysis, setAnalysis] = useState<Analysis[]>([]);

    const handlePersonalInfoSubmit = (data: PersonalInfoFormData) => {
        setPersonalInfo(data);
        goNext();
    };

    const handleDrugAllergiesSubmit = (allergies: DrugAllergyFormData) => {
        setDrugAllergies(allergies);
        goNext();
    };

    const handleChronicDiseasesSubmit = (diseases: string[]) => {
        setChronicDiseases(diseases);
        goNext();
    }

    const handleExamsSubmit = (exams: Exam[]) => {
        setExams(exams);
        goNext();
    }

    const handleAnalysisSubmit = (analysis: Analysis[]) => {
        setAnalysis(analysis);
        goNext();
    }

    const goNext = () => {
        setCurrentStep(prev => (prev < stepComponents.length - 1 ? prev + 1 : prev));
    };

    const handleFinalSubmit = () => {
        console.log('Submitting data', {
            personalInfo,
            drugAllergies,
            chronicDiseases,
        });
        router.push('/patients');
    };

    const renderForm = () => {
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
                return <PatientSummary
                    personalInfo={personalInfo}
                    drugAllergies={drugAllergies}
                    chronicDiseases={chronicDiseases}
                    onSubmit={handleFinalSubmit}
                />;

            default:
                return null;
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className="menu" style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px', height: '100%' }}>
                {stepComponents.map((item, index) => (
                    <div key={index}
                         className={`menu-item ${index === currentStep ? 'active' : ''}`}
                         onClick={() => setCurrentStep(index)}
                         style={{ padding: '10px', cursor: 'pointer', color: index === currentStep ? 'blue' : 'black' }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <div className="form-container" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>
                {renderForm()}
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
                    {currentStep > 0 && (
                        <button onClick={() => setCurrentStep(currentStep - 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black"  }}>
                            <FaChevronLeft /> Avant
                        </button>
                    )}
                    {currentStep < stepComponents.length - 1 && (
                        <button onClick={() => setCurrentStep(currentStep + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: "black"  }}>
                            Après <FaChevronRight />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PatientUpdateContainer;
