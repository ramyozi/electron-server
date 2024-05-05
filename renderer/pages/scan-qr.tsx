import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from "../components/UI/modal";
import { calculateAge } from "../utils/sample-api-patients";
import { dataArray } from "../utils/sample-api-patients";
import Layout from "../components/Layout";
import {useUser} from "../context/UserContext";

const ScanQRPage = () => {
    const router = useRouter();
    const {user} = useUser();
    const [showModal, setShowModal] = useState(false);
    const [patient, setPatient] = useState(null);
    const [isScanning, setIsScanning] = useState(true);

    const simulateScan = () => {
        setIsScanning(false);
        const scannedData = { "id": "106" };
        const foundPatient = dataArray.find(p => p.idPatient.toString() === scannedData.id);
        if (foundPatient) {
            setPatient(foundPatient);
            setShowModal(true);
        } else {
            alert('Patient not found.');
        }
    };

    const viewPatientProfile = () => {
        setShowModal(false);
        router.push(`/patient/${patient.idPatient}`);
    };

    const cancelAction = () => {
        setShowModal(false);
        setIsScanning(true);
    };

    const styles = {
        header: {
            fontSize: '24px',
            color: '#333',
            textAlign: 'center' as const,
            margin: '20px 0'
        },
        button: {
            padding: '10px 20px',
            margin: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        image: {
            width: '100%',
            maxWidth: '200px',
            display: 'block',
            margin: 'auto',
        },
        modalContent: {
            textAlign: 'center' as const,
            marginBottom: '20px',
        }
    };

    return (
        <Layout title="Scanner le qr code" user={user}>
            <h1 style={styles.header}>Scanner le QR Code</h1>
            {isScanning ? (
                <>
                    <img src="/images/scanning.gif" alt="Scanning..." style={styles.image}/>
                    <button onClick={simulateScan} style={styles.button}>Simuler le Scan</button>
                </>
            ) : (
                showModal && patient && (
                    <Modal>
                        <p style={styles.modalContent}>Voulez-vous voir le dossier du patient ou annuler?</p>
                        <p style={styles.modalContent}>
                            {patient.firstName} {patient.lastName} ({calculateAge(patient.dateOfBirth)} ans)
                        </p>
                        <img src="/images/qr-code.png" alt="QR Code" style={{width: '100px', margin: 'auto', display: 'block'}}/>
                        <button onClick={viewPatientProfile} style={styles.button}>Voir le dossier</button>
                        <button onClick={cancelAction} style={styles.button}>Annuler</button>
                    </Modal>
                )
            )}
        </Layout>
    );
};

export default ScanQRPage;
