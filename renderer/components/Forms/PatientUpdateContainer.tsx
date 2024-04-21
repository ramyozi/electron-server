import {Patient} from "../../interfaces";
import {useRouter} from "next/router";
import {useState} from "react";
import PersonalInfoForm, {PersonalInfoFormData} from "./Patient/PersonalInfoForm";
import DrugAllergiesForm, {DrugAllergyFormData} from "./Patient/DrugAllergiesForm";
import ChronicDiseasesForm from "./Patient/ChronicDiseasesForm";
import PatientSummary from "./Patient/PatientSummary";

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
                return <PatientSummary personalInfo={personalInfo} drugAllergies={drugAllergies} chronicDiseases={chronicDiseases} onSubmit={handleFinalSubmit} />;
            default:
                return <div>Unknown step</div>;
        }
    };

    return (
        <div>
            <div>
                <button disabled={currentStep === 0} onClick={() => setCurrentStep(currentStep - 1)}>
                    Previous
                </button>
                <button disabled={currentStep === stepComponents.length - 1} onClick={() => setCurrentStep(currentStep + 1)}>
                    Next
                </button>
            </div>
            {renderForm()}
        </div>
    );
};

export default PatientUpdateContainer;
