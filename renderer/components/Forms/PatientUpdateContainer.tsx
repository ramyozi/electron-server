import {Patient} from "../../interfaces";
import {useRouter} from "next/router";
import {useState} from "react";
import PersonalInfoForm, {PersonalInfoFormData} from "./Patient/PersonalInfoForm";
import DrugAllergiesForm, {DrugAllergyFormData} from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";
import ExamForm from "./Patient/ExamForm";
import AnalysisForm from "./Patient/analysisForm";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const stepComponents = [
    { name: "Personal Information", component: PersonalInfoForm },
    { name: "Allergies Médicamenteuses", component: DrugAllergiesForm },
    { name: "Maladies Chroniques", component: ChronicDiseasesForm },
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
    const [exams, setExams] = useState<string[]>([]);
    const [analysis, setAnalysis] = useState<string[]>([]);

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

    const handleExamsSubmit = (exams: string[]) => {
        setExams(exams);
        goNext();
    }

    const handleAnalysisSubmit = (analysis: string[]) => {
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            {renderForm()}

            <div style={{marginBottom: '20px', display: 'flex'}}>
                {currentStep > 0 && (
                    <button onClick={() => setCurrentStep(currentStep - 1)} style={{
                        marginRight: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'royalblue'
                    }}>
                        <i className="fas fa-arrow-left"></i> Previous
                    </button>
                )}
                {currentStep < stepComponents.length - 1 && (
                    <button onClick={() => setCurrentStep(currentStep + 1)}
                            style={{background: 'none', border: 'none', cursor: 'pointer', color: 'royalblue'}}>
                        Next <i className="fas fa-arrow-right"></i>
                    </button>
                )}
                {currentStep === stepComponents.length - 1 && (
                    <button onClick={handleFinalSubmit}
                            style={{background: 'none', border: 'none', cursor: 'pointer', color: 'green'}}>
                        Submit <i className="fas fa-check"></i>
                    </button>
                )}
            </div>
        </div>

    );
};

export default PatientUpdateContainer;
